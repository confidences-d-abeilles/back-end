
const { signJwt } = require('../utils/jwt');

const BaseModel = require('./base');

class User extends BaseModel {
  constructor(data = {}) {
    super('user', ['id', 'email', 'password', 'firstname', 'name', 'phone', 'gender'], data);
  }

  async signJwt() {
    return signJwt(this.id, this.email, null);
  }
}

module.exports = User;
