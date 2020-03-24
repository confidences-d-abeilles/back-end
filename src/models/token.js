
const BaseModel = require('./base');

class Token extends BaseModel {
  constructor(data = {}) {
    super('token', ['user_id', 'refresh_token'], data);
  }
}

module.exports = Token;
