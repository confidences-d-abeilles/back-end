const { logWarning } = require('@cda/logger');

const { getClient } = require('../database');

const findOne = async ({ email }) => {
  const client = getClient();
  try {
    const { rows } = await client.query('SELECT * FROM public.user WHERE email = $1', [email]);
    return rows[0];
  } catch (e) {
    logWarning(e);
    return null;
  }
};


module.exports = {
  findOne,
};
