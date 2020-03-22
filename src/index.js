
const { logError } = require('./utils/logger.js');
const { checkEnv, getEnv } = require('./utils/env.js');

try {
  checkEnv(getEnv());
} catch (e) {
  logError(e.message);
}
