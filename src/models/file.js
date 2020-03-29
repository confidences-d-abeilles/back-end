
const { logError } = require('@cda/logger');

const { getClient } = require('../database');
const BaseModel = require('./base');

class File extends BaseModel {
  constructor(data) {
    super('file', ['id', 'filename'], data);
  }

  async attatchToHive(beehive) {
    const client = getClient();
    try {
      await client.insert({
        file: this.id,
        beehive,
      }).into('beehive_file');
    } catch (e) {
      logError(e);
    }
  }
}

module.exports = File;
