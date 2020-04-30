
const { logError } = require('@cda/logger');

const { SERV_ERR, NEED_AUTH } = require('../../messages');
const Address = require('../../models/address');
const User = require('../../models/user');

const get = async ({ owner, params }, res) => {
  try {
    if (!owner && !params.id) {
      return res.status(400).send(NEED_AUTH);
    }
    const id = owner ? owner.id : params.id;
    const user = await new User().findOne({ id }, { toJson: false });
    if (user.billing_address) {
      user.billing_address = (await new Address()
        .findOne({ id: user.billing_address }));
    }
    if (user.delivery_address) {
      user.delivery_address = (await new Address()
        .findOne({ id: user.delivery_address }));
    }
    return res.status(200).send(user.toJson());
  } catch (e) {
    logError(e);
    return res.status(500).send(SERV_ERR);
  }
};


module.exports = get;
