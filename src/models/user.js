const { logWarning } = require('@cda/logger');

const { getClient } = require('../database');

const findOne = async (fields) => {
  const client = getClient();
  try {
    const res = await client.where(fields).select('password', 'id', 'email').from('user');
    return res[0];
  } catch (e) {
    logWarning(e);
    return null;
  }
};


module.exports = {
  findOne,
};
