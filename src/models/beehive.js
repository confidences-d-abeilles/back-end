
const BaseModel = require('./base');

class Beehive extends BaseModel {
  constructor(data = {}) {
    super('user', ['id', 'name', 'occupation', 'identifier', 'memo'], data);
  }
}

module.exports = Beehive;
