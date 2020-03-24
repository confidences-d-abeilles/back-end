
const BaseModel = require('./base');

class Product extends BaseModel {
  constructor(data = {}) {
    super('address', ['id', 'name'], data);
  }
}

module.exports = Product;
