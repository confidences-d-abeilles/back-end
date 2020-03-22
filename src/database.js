
const { connect, connection } = require('mongoose');
const { logSuccess, logDebug } = require('@cda/logger');
const { getEnv } = require('@cda/env');

module.exports = () => new Promise((resolve, reject) => {
  logDebug('Connecting to the database');
  const env = getEnv();
  connect(env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = connection;
  db.on('error', (e) => reject(e));
  db.on('open', async () => {
    logSuccess('Connected to the database');
    resolve();
  });
});
