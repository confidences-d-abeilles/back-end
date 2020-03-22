const { logError } = require('@cda/logger');
const { compare } = require('bcrypt');
const { signJwt } = require('../utils/jwt');
const { checkFields } = require('../utils/request');

const User = require('../models/user');

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
    const token = await signJwt(user.id, user.email, null);
    return res.json(token).send();
  } catch (e) {
    logError(e);
    return res.status(500).send('Server error');
  }
};

module.exports = {
  auth,
};
