
const { Client } = require('pg');
const { logSuccess } = require('@cda/logger');
const { getEnv } = require('@cda/env');

module.exports = async () => {
  const {
    PGUSER, PGHOST, PGDATABASE, PGPASSWORD,
  } = getEnv();
  const client = new Client({
    user: PGUSER,
    host: PGHOST,
    database: PGDATABASE,
    password: PGPASSWORD,
  });
  const db = await client.connect();
  logSuccess('Connected to the database');
  return db;
};
