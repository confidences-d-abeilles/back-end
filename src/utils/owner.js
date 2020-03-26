
const { logDebug } = require('@cda/logger');

const { decodeJwt } = require('./jwt');
const User = require('../models/user');

const getJwt = (authorization) => authorization.split(' ')[1];

const ownerMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) {
    const { email } = decodeJwt(getJwt(authorization));
    req.owner = await new User().findOne({ email });
  }
  next();
};

module.exports = ownerMiddleware;
