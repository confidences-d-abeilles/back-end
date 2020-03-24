
const BaseModel = require('./base');

class News extends BaseModel {
  constructor(data = {}) {
    super('address', ['id', 'title', 'content'], data);
  }
}

module.exports = News;
