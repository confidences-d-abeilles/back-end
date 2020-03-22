
const checkFields = (req, fields) => fields.reduce((acc, current) => acc
  && Object.keys(req.body).includes(current), true);

module.exports = {
  checkFields,
};
