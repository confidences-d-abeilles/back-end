
const { logError } = require('@cda/logger');

const { checkFields } = require('../../utils/request');
const { SERV_ERR, OK, MISS_PARAM } = require('../../messages');

const create = async ({ body }, res) => {
  try {
    const fields = ['gender', 'name', 'firstname', 'line1', 'zipcode', 'city', 'country'];
    if (!checkFields(body, fields)) {
      return res.status(400).send(MISS_PARAM);
    }


    return res.status(200).send(OK);
  } catch (e) {
    logError(e);
    return res.status(500).send(SERV_ERR);
  }
};

module.exports = create;
