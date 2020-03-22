const { connect, connection } = require('mongoose');
const { compare } = require('bcrypt');
const { sign } = require('jsonwebtoken');
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
    const user = await User.findOne({ email: 'clement@champouillon.com' }).exec();
    logDebug(await compare('mdp', user.password));
    const token = sign({
      id: user.id,
      email: user.email,
      user_type: user.user_type,
    }, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRATION });
    logDebug(token);
  });
} catch (e) {
  logError(e.message);
}
