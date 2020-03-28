
const { logError } = require('@cda/logger');

const { SERV_ERR, NEED_AUTH } = require('../../messages');
const Subscription = require('../../models/subscription');

const get = async ({ owner }, res) => {
  if (!owner) {
    return res.status(400).send(NEED_AUTH);
  }
  try {
    const rows = await new Subscription().find({ user: owner.id });
    return res.status(200).send(rows);
  } catch (e) {
    logError(e);
    return res.status(500).send(SERV_ERR);
  }
};

module.exports = get;
