const { logWarning } = require('@cda/logger');
const { getClient } = require('../database');

const insertOne = async (userId, refreshToken) => {
  const client = getClient();
  try {
    await client.insert({ userId, refreshToken }).into('token');
  } catch (e) {
    logWarning(e);
  }
};


module.exports = {
  insertOne,
};
