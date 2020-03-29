
const { logError } = require('@cda/logger');
const Beehive = require('../../models/beehive');
const { SERV_ERR } = require('../../messages');

const get = async ({ params }, res) => {
  try {
    const beehives = params.search
      ? await new Beehive().search(params.search)
      : await new Beehive().find();
    return res.status(200).send(beehives);
  } catch (e) {
    logError(e);
    return res.status(500).send(SERV_ERR);
  }
};

module.exports = get;
