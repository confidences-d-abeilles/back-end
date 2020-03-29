
const { logError } = require('@cda/logger');

const { MISS_PARAM, SERV_ERR, OK } = require('../../messages');
const Role = require('../../models/role');

const assign = async ({ params }, res) => {
  try {
    if (!params.userId || !params.roleId) {
      return res.status(400).send(MISS_PARAM);
    }
    const role = await new Role().findOne({ id: params.roleId }, { toJson: false });
    await role.assign(params.userId);
    return res.status(200).send(OK);
  } catch (e) {
    logError(e);
    return res.status(500).send(SERV_ERR);
  }
};

module.exports = assign;
