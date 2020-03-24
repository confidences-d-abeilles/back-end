
const R = require('ramda');
const { logError } = require('@cda/logger');
const { hash } = require('bcrypt');

const { checkFields } = require('../../utils/request');
const { MISS_PARAM, OK, SERV_ERR } = require('../../messages');
const User = require('../../models/user');


const signUp = async ({ body }, res) => {
  try {
    const fields = ['gender', 'firstname', 'name', 'email', 'phone', 'password'];
    if (!checkFields(body, fields)) {
      return res.status(400).send(MISS_PARAM);
    }

    const hashedPassword = await hash(body.password, 10);
    const user = new User({ ...R.pick(fields, body), password: hashedPassword });
    await user.save();
    return res.status(200).send(OK);
  } catch (e) {
    logError(e);
    return res.status(500).send(SERV_ERR);
  }
};

module.exports = signUp;
