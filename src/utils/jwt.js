const { getEnv } = require('@cda/env');

const signJwt = (id, email, roles) => new Promise((resolve) => {
  const env = getEnv();
  const token = sign({
    id,
    email,
    roles,
  }, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRATION });
  resolve(token);
});


module.exports = {
  signJwt,
};
