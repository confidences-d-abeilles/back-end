
const { logError } = require('@cda/logger');

const { EXP } = require('../messages');
const { decodeJwt, getJwt } = require('./jwt');
const User = require('../models/user');

const ownerMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  try {
    if (authorization) {
      const jwt = getJwt(authorization);
      if (!jwt) {
        return res.status(401).send(EXP);
      }
      const { email, exp } = decodeJwt(jwt);
      if (exp * 1000 < Date.now()) {
        return res.status(401).send(EXP);
      }
      req.owner = await new User().findOne({ email });
    }
  } catch (e) {
    logError(e);
  }
  return next();
};

module.exports = ownerMiddleware;
