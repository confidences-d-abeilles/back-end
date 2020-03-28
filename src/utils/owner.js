
const { logDebug, logError } = require('@cda/logger');

const { decodeJwt } = require('./jwt');
const User = require('../models/user');

const getJwt = (authorization) => authorization.split(' ')[1];

const ownerMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  try {
    if (authorization) {
      const { email } = decodeJwt(getJwt(authorization));
      req.owner = await new User().findOne({email});
    }
  } catch (e) {
    logError(e);
  }
  next();
};

module.exports = ownerMiddleware;
