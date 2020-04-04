
const R = require('ramda');
const { logDebug } = require('@cda/logger');

const { getClient } = require('../database');

class BaseModel {
  /**
   * @constructor
   * @param {string} tableName
   * @param {string[]} fields
   * @param {Object<string,*>} data
   */
  constructor(tableName, fields, data) {
    this.fields = fields;
    this.dbFields = fields.map((field) => `${tableName}.${field}`);
    this.tableName = tableName;
    this.updateUnprefixedDbFields();
    Object.assign(this, R.pick(this.fields, data));
  }

  updateUnprefixedDbFields() {
    this.unprefixedDbFields = this.dbFields.map((field) => field.split('.')[1]);
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
    const rows = await client.where(fields).select(this.fields).from(this.tableName);
    logDebug('Success');
    if (!rows[0]) {
      return null;
    }
    const res = new this.constructor(rows[0]);
    return toJson ? res.toJson() : res;
  }

  /**
   * Delete the current instance from database
   *
   * @async
   * @returns {Promise<void>}
   */
  async delete() {
    logDebug(`Deleting ${this.tableName}`);
    const client = getClient();
    await client.where(this.toJson()).from(this.tableName).del();
    logDebug('Success');
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
    return rows.map((row) => new this.constructor(row).toJson());
  }

  async save() {
    const client = getClient();
    logDebug(`Saving ${this.tableName}`);
    if (this.id) {
      logDebug('It\'s an update');
      const rows = await client.update(R.pick(this.unprefixedDbFields, this), ['*']).into(this.tableName).where({ id: this.id });
      Object.assign(this, R.pick(this.fields, rows[0]));
    } else {
      const rows = await client.insert(R.pick(this.unprefixedDbFields, this), ['*']).into(this.tableName);
      Object.assign(this, R.pick(this.fields, rows[0]));
    }
    logDebug('Success');
  }

  toJson() {
    return R.pick(this.fields, this);
  }
}

module.exports = BaseModel;
