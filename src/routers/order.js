
const { Router } = require('express');

const { get } = require('../controllers/order');
const { create } = require('../controllers/order');
const { pay } = require('../controllers/order');

const router = Router();

router.get('/', get);

router.post('/', create);

router.post('/checkout/:orderId', pay);

module.exports = router;
