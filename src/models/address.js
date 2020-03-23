
const { logDebug } = require('@cda/logger');
const R = require('ramda');

const { getClient } = require('../database');

const insertOne = async (data) => {
  logDebug('Inserting one address');
  const client = getClient();
  await client.insert(R.pick(['gender', 'firstname', 'name', 'line1', 'line2', 'zipcode', 'city', 'country'], data)).into('address');
  logDebug('Success');
};

module.exports = {
  insertOne,
};
