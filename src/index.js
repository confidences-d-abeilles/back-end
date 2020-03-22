const { connect, connection } = require('mongoose');
const { logError, logSuccess, logDebug } = require('@cda/logger');
const { checkEnv, getEnv } = require('@cda/env');

try {
  const env = getEnv();
  checkEnv(env);
  logDebug('Connecting to the database');
  connect(env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = connection;
  db.on('error', () => logError('Fail to connect to the database'));
  db.on('open', () => logSuccess('Connected to the database'));
} catch (e) {
  logError(e.message);
}
