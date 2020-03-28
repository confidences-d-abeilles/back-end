
const { Router } = require('express');
const { create, get } = require('../controllers/subscription');

const router = Router();

router.get('/', get);
router.post('/', create);

module.exports = router;
