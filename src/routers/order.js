
const { Router } = require('express');

const { get, create, pay, validate } = require('../controllers/order');

const router = Router();

router.get('/', get);

router.post('/', create);

router.post('/checkout/:orderId', pay);

router.post('/validate/:orderId', validate);

module.exports = router;
