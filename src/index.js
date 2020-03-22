
const { logError } = require('@cda/logger');
const { checkEnv, getEnv } = require('@cda/env');

try {
  checkEnv(getEnv());
} catch (e) {
  logError(e.message);
}
