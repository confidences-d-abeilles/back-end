
const { logError } = require('@cda/logger');
const Order = require('../../models/order');
const { NEED_AUTH, SERV_ERR } = require('../../messages');

const get = async ({ owner }, res) => {
  if (!owner) {
    return res.status(400).send(NEED_AUTH);
  }
  try {
    const orders = await new Order().find({ user: owner.id });
    return res.status(200).send(orders);
  } catch (e) {
    logError(e);
    return res.status(500).send(SERV_ERR);
  }
};

module.exports = get;
