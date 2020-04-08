
const Product = require('./product');
const BaseModel = require('./base');
const { sum } = require('ramda');
const { getClient } = require('../database');

class Order extends BaseModel {
  constructor(data = {}) {
    super('order', ['id', 'price', 'status', 'products', 'user'], data);
    this.removeDbField('products');
    this.convertProducts();
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
