
const { logError } = require('@cda/logger');
const Beehive = require('../../models/beehive');
const { SERV_ERR, MISS_PARAM, OK } = require('../../messages');

const update = async ({ body, params }, res) => {
  try {
    if (!params.id) {
      return res.status(400).send(MISS_PARAM);
    }
    const beehive = await new Beehive().findOne({ id: params.id });
    const updated = new Beehive({
      ...beehive,
      ...body,
    });
    await updated.save();
    return res.status(200).send(OK);
  } catch (e) {
    logError(e);
    return res.status(500).send(SERV_ERR);
  }
};

module.exports = update;