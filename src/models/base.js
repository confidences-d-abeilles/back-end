
const R = require('ramda');
const { logDebug } = require('@cda/logger');

const { getClient } = require('../database');

class BaseModel {
  constructor(tableName, fields, data) {
    this.fields = fields;
    this.tableName = tableName;
    Object.assign(this, R.pick(this.fields, data));
  }

  async findOne(fields) {
    logDebug('Finding user');
    const client = getClient();
    const rows = await client.where(fields).select('password', 'id', 'email').from('user');
    logDebug('Success');
    return new this.constructor(rows[0]);
  }

  async save() {
    const client = getClient();
    logDebug(`Saving ${this.tableName}`);
    await client.insert(R.pick(this.fields, this)).into(this.tableName);
    logDebug('Success');
  }
}

module.exports = BaseModel;
