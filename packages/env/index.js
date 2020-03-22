const { config } = require('dotenv');

const getEnv = () => {
  config();
  return process.env;
};

const checkEnv = (env, mandatoryFields) => {
  mandatoryFields.map((field) => {
    if (!env[field]) {
      throw new Error(`Missing field ${field} in environment`);
    }
    return null;
  });
  return null;
};

module.exports = {
  getEnv,
  checkEnv,
};
