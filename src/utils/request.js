
const checkFields = (body, fields) => fields.reduce((acc, current) => acc
  && Object.keys(body).includes(current), true);

module.exports = {
  checkFields,
};
