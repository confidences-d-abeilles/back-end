
const BaseModel = require('./base');

class Product extends BaseModel {
  constructor(data = {}) {
    super('product', ['id', 'name', 'duration', 'price', 'duty'], data);
  }
}

module.exports = Product;
