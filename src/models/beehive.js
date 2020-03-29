
const { logDebug } = require('@cda/logger');
const { getClient } = require('../database');
const BaseModel = require('./base');

class Beehive extends BaseModel {
  constructor(data = {}) {
    super('beehive', ['id', 'name', 'occupation', 'identifier', 'memo', 'lat', 'long', 'temp_in', 'temp_out', 'hygrometry'], data);
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
}

module.exports = Beehive;
