
const { logDebug } = require('@cda/logger');

const insertOne = async () => {
  logDebug('Inserting one beehive');

  logDebug('Success');
  return null;
};

module.exports = {
  insertOne,
};
