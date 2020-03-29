/**
 * Data manipulation module
 * @module data
 */

/**
 * Prefix all keys (fields) with the table name separated with a dot, making them sql complete.
 *
 * @param {!Object.<string>} fields
 * @param {!string} tableName
 * @returns {!Object.<string>}
 */
const toSqlFields = (fields, tableName) => Object.entries(fields).reduce((acc, [key, value]) => ({ ...acc, [`${tableName}.${key}`]: value }), {});

module.exports = {
  toSqlFields,
};
