
const R = require('ramda');
const { logError } = require('@cda/logger');
const { checkFields } = require('../../utils/request');
const { MISS_PARAM, OK, SERV_ERR } = require('../../messages');
const News = require('../../models/news');

const update = async ({ body, params }, res) => {
  try {
    const fields = ['title', 'content', 'beehive'];
    if (!checkFields(body, fields) || !params.id) {
      return res.status(400).send(MISS_PARAM);
    }
    const news = new News({
      ...R.pick(fields, body),
      id: params.id,
    });
    await news.save();
    return res.status(200).send(OK);
  } catch (e) {
    logError(e);
    return res.status(500).send(SERV_ERR);
  }
};

module.exports = update;
