
const knex = require('knex');
const { logSuccess } = require('@cda/logger');
const { getEnv } = require('@cda/env');

let client;

const initDb = async () => {
  const {
    PGUSER, PGHOST, PGDATABASE, PGPASSWORD,
  } = getEnv();

  client = knex({
    client: 'pg',
    version: '7.2',
    connection: {
      host : PGHOST,
      user : PGUSER,
      password : PGPASSWORD,
      database : PGDATABASE,
    },
  });
  logSuccess('Connected to the database');
};

const getClient = () => client;

module.exports = {
  initDb,
  getClient,
};
