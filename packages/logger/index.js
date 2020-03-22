const chalk = require('chalk');

const logError = (message) => {
  const timestamp = new Date(Date.now());
  console.log(timestamp.toLocaleString(), chalk.redBright(message));
};

const logWarning = (message) => {
  const timestamp = new Date(Date.now());
  console.log(timestamp.toLocaleString(), chalk.yellow(message));
};

module.exports = {
  logError,
  logWarning,
};