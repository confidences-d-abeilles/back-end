const { getEnv } = require('@cda/env');
const { sign } = require('jsonwebtoken');

const signJwt = (id, email, roles) => new Promise((resolve) => {
  const env = getEnv();
  const accessToken = sign({
    id,
    email,
    roles,
  }, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRATION });
  const refreshToken = sign({
    id,
  }, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRATION * 5040 });
  resolve({ accessToken, refreshToken });
});


module.exports = {
  signJwt,
};
