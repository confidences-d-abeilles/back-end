
const { Router } = require('express');

const { create } = require('../controllers/product');

const router = Router();

router.post('/', create);

module.exports = router;
