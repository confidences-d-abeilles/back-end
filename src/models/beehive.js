
const BaseModel = require('./base');

class Beehive extends BaseModel {
  constructor(data = {}) {
    super('beehive', ['id', 'name', 'occupation', 'identifier', 'memo', 'lat', 'long', 'temp_in', 'temp_out', 'hygrometry'], data);
  }
}

module.exports = Beehive;
