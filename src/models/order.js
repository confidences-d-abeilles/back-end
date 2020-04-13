
const { sum } = require('ramda');
const { logDebug } = require('@cda/logger');

const Product = require('./product');
const BaseModel = require('./base');
const { getClient } = require('../database');

class Order extends BaseModel {
  constructor(data = {}, { convertProducts } = { convertProducts: true }) {
    super('order', ['id', 'price', 'status', 'products', 'user'], data);
    this.removeDbField('products');
    if (convertProducts) {
      this.convertProducts();
    }
  }

  /**
   *
   * @param {Object<string,*>} fields To be passed to the where clause
   * @returns {Promise<Object[]>}
   */
  async find(fields = {}) {
    logDebug(`Finding ${this.tableName}`);
    const client = getClient();
    const rows = await client.where(fields).select(this.dbFields).from(this.tableName);
    logDebug('Success');
    if (!rows.length) {
      return [];
    }
    return Promise.all(rows.map(async (row) => {
      const products = await client.where({ order: row.id }).select('price', 'quantity', 'name').from('order_product')
        .leftJoin('product', 'product.id', 'order_product.product');
      return new this.constructor({ ...row, products }, { convertProducts: false }).toJson();
    }));
  }

  /**
   * Return one instance of the class, matching the criteria given by fields
   *
   * @async
   * @param {Object<string,*>} fields To be passed to the where clause
   * @param {Object} opts Options
   * @param {boolean} [opts.toJson=true] If you intend to make some operations on the entity,
   * should be forced to false
   * @returns {Promise<null|*>}
   */
  async findOne(fields, { toJson } = { toJson: true }) {
    logDebug(`Finding ${this.tableName}`);
    const client = getClient();
    const rows = await client.where(fields).select(this.dbFields).from(this.tableName);
    logDebug('Success');
    if (!rows[0]) {
      return null;
    }
    const products = await client.where({ order: rows[0].id }).select('price', 'quantity', 'name').from('order_product')
      .leftJoin('product', 'product.id', 'order_product.product');
    const res = new this.constructor({
      ...rows[0],
      products,
    }, { convertProducts: false });
    return toJson ? res.toJson() : res;
  }

  convertProducts() {
    if (typeof this.products === 'object') {
      this.products = Object.entries(this.products);
    }
  }

  async saveProducts() {
    const client = getClient();
    await Promise.all(this.products.map(([id, qty]) => client.insert({
        product: id,
        order: this.id,
        quantity: qty,
      }, ['*']).into('order_product')));
  }

  async calcPrice() {
    this.price = sum(await Promise.all(
      this.products.map(([id, qty]) => {
        return new Product().findOne({ id }).then(({ price }) => price * qty);
      })));
  }
}

module.exports = Order;
