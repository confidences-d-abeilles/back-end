
const { logError } = require('@cda/logger');

const News = require('../../models/news');
const { checkFields } = require('../../utils/request');
const { SERV_ERR, OK, MISS_PARAM } = require('../../messages');

const create = async ({ body }, res) => {
  try {
    if (!checkFields(body, ['title', 'content', 'beehive'])) {
      return res.status(400).send(MISS_PARAM);
    }
    const obj = new News(body);
    await obj.save();
    return res.status(200).send(OK);
  } catch (e) {
    logError(e);
    return res.status(500).send(SERV_ERR);
  }
};

module.exports = create;
