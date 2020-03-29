
const { Router } = require('express');

const { create, assign } = require('../controllers/role');

const router = new Router();

router.post('/', create);
router.post('/:roleId/user/:userId', assign);

module.exports = router;
