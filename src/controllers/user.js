const { logError } = require('@cda/logger');
const { compare } = require('bcrypt');
const { signJwt } = require('../utils/jwt');
const { checkFields } = require('../utils/request');

const User = require('../models/user');

const Token = require('../models/token');

/**
 * @api {get} /getJwt Generate a new Jwt
 * @apiName GetJwt
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiParam {String} email Email address
 * @apiParam {String} password Password
 *
 * @apiErrorExample 401
 *  HTTP 401 Invalid credentials
 * @apiErrorExample 400
 *  HTTP 400 Missing parameters
 *
 * @apiSuccess {String} token Newly created token
 */
const auth = async ({ body }, res) => {
  try {
    if (!checkFields(body, ['email', 'password'])) {
      return res.status(400).send('Missing parameters');
    }
    const { email, password } = body;
    const user = await User.findOne({ email });
    if (!(await compare(password, user.password))) {
      return res.status(401).send('Invalid credentials');
    }

    // TODO: Add roles here
    const tokens = await signJwt(user.id, user.email, null);
    await Token.insertOne(user.id, tokens.refreshToken);
    return res.json(tokens).send();
  } catch (e) {
    logError(e);
    return res.status(500).send('Server error');
  }
};

module.exports = {
  auth,
};
