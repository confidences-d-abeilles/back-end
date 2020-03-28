
const { Router } = require('express');

const { get } = require('../controllers/order');

const router = Router();

router.get('/', get);

module.exports = router;
