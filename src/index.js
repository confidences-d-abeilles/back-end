const express = require('express');
const bodyParser = require('body-parser');
const { logError, logSuccess } = require('@cda/logger');
const { checkEnv, getEnv } = require('@cda/env');

const { initDb } = require('./database');

const { auth } = require('./controllers/user');

const mandatoryFields = [
  'JWT_SECRET',
  'JWT_EXPIRATION',
  'PGUSER',
  'PGHOST',
  'PGPASSWORD',
  'PGDATABASE',
  'PGPORT',
];

const app = express();
const port = 3000;

(async () => {
  try {
    const env = getEnv();
    checkEnv(env, mandatoryFields);
    await initDb();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.post('/', auth);

    app.listen(port, () => logSuccess(`Server started and listening on port ${port}`));
  } catch (e) {
    logError(e.message);
  }
})();
