/**
 * JWT utils module.
 * @module jwt
 */

const { getEnv } = require('@cda/env');
const { sign, decode } = require('jsonwebtoken');

/**
 * Generate a pair of access and refresh token, signed
 * with environment constraints, and encoding user data in it.
 *
 * @param {!number} id The id of the authenticating user.
 * @param {!string} email The email of the authenticating user.
 * @param {!string[]} roles The roles of the authenticating user.
 * @returns {Promise<Object<string, string>>}
 */
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

/**
 *
 * @param {!string} authorization A authorization string directly extracted from a HTTP header
 * @returns {!string} token The token separated from its type
 */
const getJwt = (authorization) => authorization.split(' ')[1];

/**
 *
 * @param {!string} token A valid but eventually expired token
 * @returns {null|{payload: *, signature: *, header: *}}
 */
const decodeJwt = (token) => decode(token);

module.exports = {
  getJwt,
  signJwt,
  decodeJwt,
};
