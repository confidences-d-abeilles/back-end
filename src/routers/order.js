
const { Router } = require('express');

const { get } = require('../controllers/order');
const { create } = require('../controllers/order');

const router = Router();

router.get('/', get);

router.post('/', create);

module.exports = router;
