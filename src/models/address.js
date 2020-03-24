
const BaseModel = require('./base');

class Address extends BaseModel {
  constructor(data = {}) {
    super('address', ['id', 'firstname', 'name', 'gender', 'line1', 'line2', 'zipcode', 'city', 'country'], data);
  }
}


module.exports = Address;
