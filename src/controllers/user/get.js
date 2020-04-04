
const { logError } = require('@cda/logger');

const { SERV_ERR } = require('../../messages');
const Address = require('../../models/address');

const get = async ({ owner }, res) => {
  if (!owner) {
    return res.status(500).send(SERV_ERR);
  }
  try {
    if (owner.billing_address) {
      owner.billing_address = (await new Address()
        .findOne({ id: owner.billing_address }));
    }
    if (owner.delivery_address) {
      owner.delivery_address = (await new Address()
        .findOne({ id: owner.delivery_address }));
    }
    return res.status(200).send(owner.toJson());
  } catch (e) {
    logError(e);
    return res.status(500).send(SERV_ERR);
  }
};


module.exports = get;
