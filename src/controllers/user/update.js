
const User = require('../../models/user');
const { SERV_ERR, NEED_AUTH, OK } = require('../../messages');

const update = async ({ owner, body }, res) => {
  try {
    if (!owner) {
      return res.status(400).send(NEED_AUTH);
    }
    const user = await new User().findOne({ id: owner.id }, { toJson: false });
    Object.assign(user, body);
    await user.save();
    return res.status(200).send(OK);
  } catch(e) {
    return res.status(500).send(SERV_ERR);
  }
};

module.exports = update;
