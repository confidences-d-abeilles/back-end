const { logDebug } = require('@cda/logger');

const { getClient } = require('../database');

const findOne = async (fields) => {
  logDebug('Finding user');
  const client = getClient();
  const rows = await client.where(fields).select('password', 'id', 'email').from('user');
  logDebug('Success');
  return rows[0] || null;
};

const insertOne = async (fields) => {
  logDebug('Inserting user');
  const client = getClient();
  const rows = await client.insert(fields).into('user');
  logDebug('Success');
  return rows[0] || null;
};


module.exports = {
  findOne,
  insertOne,
};
