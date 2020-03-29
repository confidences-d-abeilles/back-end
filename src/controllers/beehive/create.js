
const { logError } = require('@cda/logger');

const { checkFields } = require('../../utils/request');
const { SERV_ERR, OK, MISS_PARAM } = require('../../messages');
const Beehive = require('../../models/beehive');

const create = async ({ body }, res) => {
  try {
    const fields = ['name'];
    if (!checkFields(body, fields)) {
      return res.status(400).send(MISS_PARAM);
    }
    const newBeehive = new Beehive(body);
    await newBeehive.save();
    return res.status(200).send(OK);
  } catch (e) {
    logError(e);
    return res.status(500).send(SERV_ERR);
  }
};

module.exports = create;
