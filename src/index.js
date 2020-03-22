const { connect, connection } = require('mongoose');
const { compare } = require('bcrypt');
const { logError, logSuccess, logDebug } = require('@cda/logger');
const { checkEnv, getEnv } = require('@cda/env');
const User = require('./models/user');

const mandatoryFields = ['MONGO_URL', 'JWT_SECRET', 'JWT_EXPIRATION'];

try {
  const env = getEnv();
  checkEnv(env, mandatoryFields);
  logDebug('Connecting to the database');
  connect(env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = connection;
  db.on('error', () => logError('Fail to connect to the database'));
  db.on('open', async () => {
    logSuccess('Connected to the database');
    const users = await User.findOne({ email: "clement@champouillon.com" }).exec();
    logDebug(users);
    logDebug(await compare("1CC5W1cc5w!!", users.password));
  });
} catch (e) {
  logError(e.message);
}
