
const { logError } = require('@cda/logger');

const Order = require('../../models/order');
const { checkFields } = require('../../utils/request');
const { SERV_ERR, OK, MISS_PARAM } = require('../../messages');

const create = async ({ body, owner }, res) => {
  try {
    const fields = ['products'];
    if (!checkFields(body, fields)) {
      return res.status(400).send(MISS_PARAM);
    }
    const newOrder = new Order({
      products: body.products,
      user: owner.id,
    });
    await newOrder.calcPrice();
    await newOrder.save();
    await newOrder.saveProducts();

    return res.status(200).send(OK);
  } catch (e) {
    logError(e);
    return res.status(500).send(SERV_ERR);
  }
};

module.exports = create;
