
const { logError } = require('@cda/logger');
const { SERV_ERR } = require('../../messages');

const get = (req, res) => {
  try {
    return res.status(200).send();
  } catch (e) {
    logError(e);
    return res.status(500).send(SERV_ERR);
  }
};

module.exports = get;
