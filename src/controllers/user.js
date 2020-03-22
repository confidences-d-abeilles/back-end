const { logDebug, logError } = require('@cda/logger');
const { compare } = require('bcrypt');
const { signJwt } = require('../utils/jwt');
const { checkFields } = require('../utils/request');

const User = require('../models/user');

const auth = async (req, res) => {
  try {
    if (!checkFields(req, ['email', 'password'])) {
      return res.status(400).send('Missing parameters');
    }
    const user = await User.findOne({ email: 'clement@champouillon.com' });
    logDebug(req.body);
    if (!(await compare('toto', user.password))) {
      return res.status(401).send('Invalid credentials');
    }

    // TODO: Add roles here
    const token = signJwt(user.id, user.email, null);
    return res.json(token).send();
  } catch (e) {
    logError(e);
    throw (e);
    return res.status(500).send('Server error');
  }
};

module.exports = {
  auth,
};
