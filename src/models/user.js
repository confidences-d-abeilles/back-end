
const R = require('ramda');

const { signJwt } = require('../utils/jwt');
const BaseModel = require('./base');

class User extends BaseModel {
  constructor(data = {}) {
    super('user', ['id', 'email', 'password', 'firstname', 'name', 'phone', 'gender', 'billing_address', 'delivery_address'], data);
  }

  async signJwt() {
    return signJwt(this.id, this.email, null);
  }

  toJson() {
    return R.omit(['password'], R.pick(this.fields, this));
  }
}

module.exports = User;
