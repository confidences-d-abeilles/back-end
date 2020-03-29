
const { logError } = require('@cda/logger');
const { checkFields } = require('../../utils/request');
const { MISS_PARAM, OK, SERV_ERR } = require('../../messages');
const Role = require('../../models/role');

const create = async ({ body }, res) => {
  try {
    if (!checkFields(body, ['name'])) {
      return res.status(400).send(MISS_PARAM);
    }
    const newRole = new Role(body);
    await newRole.save();
    return res.status(200).send(OK);
  } catch (e) {
    logError(e);
    return res.status(500).send(SERV_ERR);
  }
};

module.exports = create;
