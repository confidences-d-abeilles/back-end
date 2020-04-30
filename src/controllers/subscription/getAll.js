
const { logError } = require('@cda/logger');
const { SERV_ERR } = require('../../messages');
const Subscriptions = require('../../models/subscription');

const getAll = async (req, res) => {
  try {
    const rows = await new Subscriptions().find({});

    return res.status(200).send(rows);
  } catch (e) {
    logError(e);
    return res.status(500).send(SERV_ERR);
  }
};

module.exports = getAll;
