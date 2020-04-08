
const R = require('ramda');
const { logDebug } = require('@cda/logger');

const { getClient } = require('../database');
const { toSqlFields } = require('../utils/data');
const BaseModel = require('./base');

class Beehive extends BaseModel {
  constructor(data = {}) {
    super('beehive', ['id', 'name', 'occupation', 'identifier', 'memo', 'lat', 'long', 'temp_in', 'temp_out', 'hygrometry', 'images'], data);
    this.removeDbField('images');
  }

  async search(search) {
    logDebug(`Searching ${this.tableName}`);
    const client = getClient();
    const rows = await client.where('name', 'ilike', `%${search}%`)
      .orWhere('identifier', 'ilike', `%${search}%`)
      .orWhere('lat', '=', parseFloat(search))
      .orWhere('long', '=', parseFloat(search))
      .select(this.dbFields)
      .from(this.tableName);
    logDebug('Success');
    if (!rows.length) {
      return [];
    }
    return rows.map((row) => new this.constructor(row).toJson());
  }

  async findOne(fields, { toJson } = { toJson: true }) {
    logDebug(`Finding ${this.tableName}`);
    const client = getClient();
    const rows = await client.where(toSqlFields(fields, this.tableName))
      .select([...this.dbFields, client.raw('json_agg("file"."filename") as images')])
      .leftJoin('beehive_file', 'beehive_file.beehive', 'beehive.id')
      .leftJoin('file', 'beehive_file.file', 'file.id')
      .groupBy('beehive.id')
      .from(this.tableName);
    logDebug('Success');
    if (!rows[0]) {
      return null;
    }
    const res = new this.constructor(rows[0]);
    return toJson ? res.toJson() : res;
  }
}

module.exports = Beehive;
