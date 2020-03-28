
const { logError } = require('@cda/logger');

const { MISS_PARAM, SERV_ERR, OK } = require('../../messages');
const { checkFields } = require('../../utils/request');

const Product = require('../../models/product');

const create = async ({ body }, res) => {
  const requiredFields = ['name', 'price', 'duty'];
  if (!checkFields(body, requiredFields)) {
    return res.status(400).send(MISS_PARAM);
  }
  try {
    const newProduct = new Product(body);
    await newProduct.save();
    return res.status(200).send(OK);
  } catch (e) {
    logError(e);
    return res.status(500).send(SERV_ERR);
  }
};

module.exports = create;
