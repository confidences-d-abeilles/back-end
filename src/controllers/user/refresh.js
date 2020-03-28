
const { logError, logDebug } = require('@cda/logger');
const { checkFields } = require('../../utils/request');
const { decodeJwt } = require('../../utils/jwt');
const { SERV_ERR, MISS_PARAM, INVALID_CRED } = require('../../messages');
const Token = require('../../models/token');
const User = require('../../models/user');

const refreshToken = async ({ body }, res) => {
  logDebug('refreshing token');
  try {
    if (!checkFields(body, ['refreshToken', 'accessToken'])) {
      return res.status(400).send(MISS_PARAM);
    }
    const decoded = decodeJwt(body.accessToken);
    if (!decoded) {
      return res.status(400).send(INVALID_CRED);
    }
    const { id } = decoded;
    const user = await new User().findOne({ id }, { toJson: false });
    const previoustoken = await new Token()
      .findOne({ user_id: user.id, refresh_token: body.refreshToken }, { toJson: false });
    if (!previoustoken) {
      return res.status(401).send(INVALID_CRED);
    }

    // TODO: Add roles here§
    const tokens = await user.signJwt();
    const token = new Token({ user_id: user.id, refresh_token: tokens.refreshToken });
    await token.save();
    await previoustoken.delete();
    return res.status(200).send(tokens);
  } catch (e) {
    logError(e);
    return res.status(500).send(SERV_ERR);
  }
};

module.exports = refreshToken;
