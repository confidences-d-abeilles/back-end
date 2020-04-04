
const { SERV_ERR } = require('../../messages');
const Product = require('../../models/product');

const get = async (req, res) => {
  try {
    const products = await new Product().find();
    res.status(200).send(products);
  } catch (e) {
    res.status(500).send(SERV_ERR);
  }
};

module.exports = get;
