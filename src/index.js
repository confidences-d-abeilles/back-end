const express = require('express');
const { logError, logSuccess } = require('@cda/logger');
const { checkEnv, getEnv } = require('@cda/env');

const connectDatabase = require('./database');

const { auth } = require('./controllers/user');

const mandatoryFields = ['MONGO_URL', 'JWT_SECRET', 'JWT_EXPIRATION'];

const app = express();
const port = 3000;

(async () => {
  try {
    const env = getEnv();
    checkEnv(env, mandatoryFields);
    await connectDatabase();

    app.get('/', auth);

    app.listen(port, () => logSuccess(`Server started and listening on port ${port}`));
  } catch (e) {
    logError(e.message);
  }
})();
