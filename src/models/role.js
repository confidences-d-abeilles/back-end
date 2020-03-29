
const { logError } = require('@cda/logger');
const BaseModel = require('./base');
const { getClient } = require('../database');

class Role extends BaseModel {
  constructor(data = {}) {
    super('role', ['id', 'name'], data);
  }

  async assign(userId) {
    const client = getClient();
    try {
      const rows = await client.select('id').where({
        user: userId,
        role: this.id,
      }).from('user_role');
      if (rows.length) {
        return;
      }
      await client.insert({
        user: userId,
        role: this.id,
      }).into('user_role');
    } catch (e) {
      logError(e);
    }
  }
}

module.exports = Role;
