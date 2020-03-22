const { logDebug } = require('@cda/logger');
const { getEnv } = require('@cda/env');
const { compare } = require('bcrypt');
const { sign } = require('jsonwebtoken');

const User = require('../models/user');

module.exports = {

  auth: async (req, res) => {
    const env = getEnv();
    const user = await User.findOne({ email: 'clement@champouillon.com' }).exec();
    logDebug(await compare('mdp', user.password));
    const token = sign({
      id: user.id,
      email: user.email,
      user_type: user.user_type,
    }, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRATION });
    logDebug(token);
    res.json(token).send();
  },


};
