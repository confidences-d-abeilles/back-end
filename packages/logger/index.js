/* eslint-disable no-console */
const chalk = require('chalk');

const withTime = (message) => {
  const timestamp = new Date(Date.now());
  console.log(chalk.rgb(100, 100, 100)(timestamp.toLocaleString()), message);
};

const logError = (error) => {
  const message = error.message;
  const trace = error.stack;
  withTime(chalk.red(message));
  withTime(chalk.red(trace));
}

const logWarning = (message) => withTime(chalk.yellow(message));

const logSuccess = (message) => withTime(chalk.green(message));

const logDebug = (message) => withTime(message);

module.exports = {
  logError,
  logWarning,
  logSuccess,
  logDebug,
};
