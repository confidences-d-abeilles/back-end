const { logDebug } = require('@cda/logger');
const R = require('ramda');
const { getClient } = require('../database');

const insertOne = async (data) => {
  logDebug('Inserting token');
  const client = getClient();
  await client.insert(R.pick(['userId', 'refreshToken'], data)).into('token');
  logDebug('Success');
};


module.exports = {
  insertOne,
};
