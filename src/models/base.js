
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
    const rows = await client.where(fields).select(this.fields).from(this.tableName);
    const res = new this.constructor(rows[0]);
    logDebug('Success');
    return res;
  }

  async save() {
    const client = getClient();
    logDebug(`Saving ${this.tableName}`);
    if (this.id) {
      const rows = await client.update(R.pick(this.fields, this), ['*']).into(this.tableName).where({ id: this.id });
      Object.assign(this, R.pick(this.fields, rows[0]));
    } else {
      const rows = await client.insert(R.pick(this.fields, this), ['*']).into(this.tableName);
      Object.assign(this, R.pick(this.fields, rows[0]));
    }
    logDebug('Success');
  }

  toJson() {
    return R.pick(this.fields, this);
  }
}

module.exports = BaseModel;
