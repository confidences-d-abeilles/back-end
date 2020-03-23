const { logWarning } = require('@cda/logger');

const { getClient } = require('../database');

const findOne = async (fields) => {
  const client = getClient();
  try {
    const rows = await client.where(fields).select('password', 'id', 'email').from('user');
    return rows[0] || null;
  } catch (e) {
    logWarning(e);
    return null;
  }
};

const insertOne = async (fields) => {
  const client = getClient();
  try {
    const rows = await client.insert(fields).into('user');
    return rows[0];
  } catch (e) {
    logWarning(e);
    return null;
  }
};


module.exports = {
  findOne,
  insertOne,
};
