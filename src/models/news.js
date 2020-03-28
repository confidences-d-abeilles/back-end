
const BaseModel = require('./base');

class News extends BaseModel {
  constructor(data = {}) {
    super('news', ['id', 'title', 'content', 'beehive'], data);
  }
}

module.exports = News;
