
const { logError } = require('@cda/logger');

const { SERV_ERR } = require('../../messages');
const Address = require('../../models/address');

const get = async (req, res) => {
  if (!req.owner) {
    return res.status(400).send(SERV_ERR);
  }
  try {
    req.owner.billingAddress = (await new Address()
      .findOne({ id: req.owner.billingAddress }));
    req.owner.deliveryAddress = (await new Address()
      .findOne({ id: req.owner.deliveryAddress }));
    return res.status(200).send(req.owner);
  } catch (e) {
    logError(e);
    return res.status(500).send(SERV_ERR);
  }
};


module.exports = get;
