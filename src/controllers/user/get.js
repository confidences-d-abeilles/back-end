
const { logError } = require('@cda/logger');

const { SERV_ERR } = require('../../messages');
const Address = require('../../models/address');

const get = async (req, res) => {
  if (!req.owner) {
    res.status(400).send(SERV_ERR);
  }
  try {
    req.owner.billing_address = (await new Address()
      .findOne({ id: req.owner.billing_address })).toJson();
    req.owner.delivery_address = (await new Address()
      .findOne({ id: req.owner.delivery_address })).toJson();
    res.status(200).send(req.owner.toJson());
  } catch (e) {
    logError(e);
  }
};


module.exports = get;
