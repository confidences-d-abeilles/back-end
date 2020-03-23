const express = require('express');
const bodyParser = require('body-parser');
const { logError, logSuccess } = require('@cda/logger');
const { checkEnv, getEnv } = require('@cda/env');

const { initDb } = require('./database');

const userRouter = require('./routers/user');
const addressRouter = require('./routers/address');
const beehiveRouter = require('./routers/beehive');

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

    app.use('/user', userRouter);
    app.use('/address', addressRouter);
    app.use('/beehive', beehiveRouter);

    app.listen(port, () => logSuccess(`Server started and listening on port ${port}`));
  } catch (e) {
    logError(e.message);
  }
})();
