
const { logError } = require('@cda/logger');
const Beehive = require('../../models/beehive');
const News = require('../../models/news');
const { SERV_ERR, MISS_PARAM } = require('../../messages');

const get = async (req, res) => {
  if (!req.params.id) {
    return res.status(400).send(MISS_PARAM);
  }
  try {
    const beehive = await new Beehive().findOne({ id: req.params.id });
    const news = await new News().find({ beehive: req.params.id });
    const response = {
      ...beehive,
      news,
    };
    return res.status(200).send(response);
  } catch (e) {
    logError(e);
    return res.status(500).send(SERV_ERR);
  }
};

module.exports = get;
