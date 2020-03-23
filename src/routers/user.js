const { Router } = require('express');
const { auth, signUp } = require('../controllers/user');

const router = Router();


router.post('/auth', auth);

router.post('/signup', signUp);

module.exports = router;
