
const { logDebug } = require('@cda/logger');
const R = require('ramda');

const { getClient } = require('../database');

class Address {
  constructor({
    firstname, name, gender, line1, line2, zipcode, city, country,
  }) {
    this.firstname = firstname;
    this.name = name;
    this.gender = gender;
    this.line1 = line1;
    this.line2 = line2;
    this.zipcode = zipcode;
    this.city = city;
    this.country = country;
  }


}


module.exports = Address;
