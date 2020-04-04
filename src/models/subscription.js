
const R = require('ramda');
const { logDebug } = require('@cda/logger');
const { getClient } = require('../database');

const BaseModel = require('./base');
const Product = require('./product');
const Beehive = require('./beehive');

class Subscription extends BaseModel {
  constructor(data = {}) {
    super('subscription', ['id', 'product', 'user', 'status', 'beehive'], data);
    this.dbFields.splice(this.dbFields.indexOf(`${this.tableName}.beehive`), 1);
  }

  async find(fields) {
    logDebug(`Finding ${this.tableName}`);
    const client = getClient();
    const rows = await client.where(fields).select([...this.dbFields, 'beehive.name as beehiveName', 'beehive.id as beehiveId', 'product.name as productName'])
      .from(this.tableName).leftJoin('product', 'product.id', 'product')
      .leftJoin('beehive_subscription', 'beehive_subscription.subscription', 'subscription.id')
      .leftJoin('beehive', 'beehive.id', 'beehive_subscription.beehive');
    logDebug('Success');
    if (!rows.length) {
      return [];
    }
    return rows.map(({
      productName, beehiveName, beehiveId, ...row
    }) => {
      const product = new Product({
        name: productName,
      }).toJson();
      const beehive = new Beehive({
        id: beehiveId,
        name: beehiveName,
      }).toJson();
      return new this.constructor({
        ...row,
        product,
        beehive,
      }).toJson();
    });
  }

  toJson() {
    return R.pick([...this.fields, 'beehive'], this);
  }
}

module.exports = Subscription;
