
const R = require('ramda');
const { logDebug } = require('@cda/logger');
const { getClient } = require('../database');

const BaseModel = require('./base');
const Product = require('./product');

class Subscription extends BaseModel {
  constructor(data = {}) {
    super('subscription', ['id', 'product', 'user', 'status'], data);
  }

  async find(fields) {
    logDebug(`Finding ${this.tableName}`);
    const client = getClient();
    const rows = await client.where(fields).select([...this.dbFields, 'name']).from(this.tableName).rightJoin('product', 'product.id', 'product');
    logDebug('Success');
    if (!rows.length) {
      return null;
    }
    return rows.map((row) => {
      const product = new Product(row).toJson();
      return new this.constructor({
        ...row,
        product,
      }).toJson();
    });
  }

  toJson() {
    return R.pick(this.fields, this);
  }
}

module.exports = Subscription;
