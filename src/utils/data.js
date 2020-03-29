/**
 *
 * @param {!Object.<string>} fields
 * @param {!string} tableName
 * @returns {!Object.<string>}
 */
const toSqlFields = (fields, tableName) => Object.entries(fields).reduce((acc, [key, value]) => ({ ...acc, [`${tableName}.${key}`]: value }), {});

module.exports = {
  toSqlFields,
};
