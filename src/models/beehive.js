
const BaseModel = require('./base');

class Beehive extends BaseModel {
  constructor(data = {}) {
    super('beehive', ['id', 'name', 'occupation', 'identifier', 'memo'], data);
  }
}

module.exports = Beehive;
