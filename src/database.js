
const { Client } = require('pg');
const { logSuccess } = require('@cda/logger');
const { getEnv } = require('@cda/env');

let client;

const initDb = async () => {
  const {
    PGUSER, PGHOST, PGDATABASE, PGPASSWORD,
  } = getEnv();
  client = new Client({
    user: PGUSER,
    host: PGHOST,
    database: PGDATABASE,
    password: PGPASSWORD,
  });
  await client.connect();
  logSuccess('Connected to the database');
};

const getClient = () => client;

module.exports = {
  initDb,
  getClient,
};
