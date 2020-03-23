const { logError } = require('@cda/logger');
const { compare } = require('bcrypt');
const { signJwt } = require('../../utils/jwt');
const { checkFields } = require('../../utils/request');
const { SERV_ERR, MISS_PARAM, INVALID_CRED } = require('../../messages');

const User = require('../../models/user');

const Token = require('../../models/token');

const auth = async ({ body }, res) => {
  try {
    if (!checkFields(body, ['email', 'password'])) {
      return res.status(400).send(MISS_PARAM);
    }
    const { email, password } = body;
    const user = await User.findOne({ email });
    if (!user || !(await compare(password, user.password))) {
      return res.status(401).send(INVALID_CRED);
    }

    // TODO: Add roles here
    const tokens = await signJwt(user.id, user.email, null);
    await Token.insertOne({ userId: user.id, refreshToken: tokens.refreshToken });
    return res.json(tokens).send();
  } catch (e) {
    logError(e);
    return res.status(500).send(SERV_ERR);
  }
};


module.exports = auth;