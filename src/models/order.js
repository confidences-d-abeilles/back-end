
const BaseModel = require('./base');

class Order extends BaseModel {
  constructor(data = {}) {
    super('order', ['id', 'price', 'status'], data);
  }
}

module.exports = Order;
