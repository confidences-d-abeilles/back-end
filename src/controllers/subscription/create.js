
const { logError } = require('@cda/logger');
const { SERV_ERR, MISS_PARAM, OK } = require('../../messages');
const Subscription = require('../../models/subscription');
const { checkFields } = require('../../utils/request');


const create = async ({ body }, res) => {
  const requiredFields = ['user', 'product'];
  if (!checkFields(body, requiredFields)) {
    return res.status(400).send(MISS_PARAM);
  }
  try {
    const newSub = new Subscription(body);
    await newSub.save();
    return res.status(200).send(OK);
  } catch (e) {
    logError(e);
    return res.status(500).send(SERV_ERR);
  }
};

module.exports = create;
