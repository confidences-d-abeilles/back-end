
const { logError } = require('@cda/logger');

const { SERV_ERR } = require('../../messages');
const User = require('../../models/user');

const getAll = async (req, res) => {
  try {
    const users = await new User().find();
    return res.status(200).send(users);
  } catch (e) {
    logError(e);
    return res.status(500).send(SERV_ERR);
  }
};


module.exports = getAll;
