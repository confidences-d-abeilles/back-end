const { getEnv } = require('@cda/env');
const { sign, decode } = require('jsonwebtoken');

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

const getJwt = (authorization) => authorization.split(' ')[1];

const decodeJwt = (token) => decode(token);

module.exports = {
  getJwt,
  signJwt,
  decodeJwt,
};
