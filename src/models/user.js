
const R = require('ramda');
const { logDebug } = require('@cda/logger');

const { signJwt } = require('../utils/jwt');
const { toSqlFields } = require('../utils/data');
const { getClient } = require('../database');
const BaseModel = require('./base');

class User extends BaseModel {
  constructor(data = {}) {
    super('user', ['id', 'email', 'roles', 'password', 'firstname', 'name', 'phone', 'gender', 'billing_address', 'delivery_address'], data);
    this.removeDbField('roles');
  }

  async findOne(fields, { toJson } = { toJson: true }) {
    logDebug(`Finding ${this.tableName}`);
    const client = getClient();
    const rows = await client.where(toSqlFields(fields, this.tableName))
      .select(this.dbFields).from(this.tableName);
    logDebug('Success');
    if (!rows[0]) {
      return null;
    }
    const roles = await client.where({ user: rows[0].id })
      .select('role.name').from('user_role')
      .leftJoin('role', 'role.id', 'user_role.role');
    const res = new this.constructor({
      ...rows[0],
      roles: roles.reduce((acc, { name }) => [...acc, name], []),
    });
    return toJson ? res.toJson() : res;
  }

  async signJwt() {
    return signJwt(this.id, this.email, this.roles);
  }

  toJson() {
    return {
      ...R.omit(['password', 'billing_address', 'delivery_address'], R.pick(this.fields, this)),
      deliveryAddress: this.delivery_address,
      billingAddress: this.billing_address,
    };
  }
}

module.exports = User;
