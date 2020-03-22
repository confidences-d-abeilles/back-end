
const { logError } = require('logger');
const { checkEnv, getEnv } = require('env');

try {
  checkEnv(getEnv());
} catch (e) {
  logError(e.message);
}
