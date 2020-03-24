
const BaseModel = require('./base');

class User extends BaseModel {
  constructor(data = {}) {
    super('user', ['id', 'email', 'password'], data);
  }
}

module.exports = User;
