const { logError } = require('@cda/logger');
const { compare } = require('bcrypt');
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
    const user = await new User().findOne({ email }, { toJson: false });
    if (!user || !(await compare(password, user.password))) {
      return res.status(401).send(INVALID_CRED);
    }

    // TODO: Add roles here
    const tokens = await user.signJwt();
    const token = new Token({ user_id: user.id, refresh_token: tokens.refreshToken });
    await token.save();
    return res.status(200).send(tokens);
  } catch (e) {
    logError(e);
    return res.status(500).send(SERV_ERR);
  }
};

module.exports = auth;
