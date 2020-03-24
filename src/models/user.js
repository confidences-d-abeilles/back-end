
const BaseModel = require('./base');

class User extends BaseModel {
  constructor(data = {}) {
    super('user', ['id', 'email', 'password', 'firstname', 'name', 'phone', 'gender'], data);
  }
}

module.exports = User;
