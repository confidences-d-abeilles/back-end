
const { Router } = require('express');
const { uploadImages, resizeImages, getResult } = require('../controllers/file');

const router = Router();

router.post('/', uploadImages, resizeImages, getResult, (req, res) => res.status(200).send('ok'));
router.post('/beehive/:beehiveId', uploadImages, resizeImages, getResult, (req, res) => res.status(200).send('ok'));

module.exports = router;
