
const { Router } = require('express');

const router = Router();

const Hive = require('../controllers/beehive');

/**
 * @api {post} /beehive Creates a beehive
 * @apiName CreateBeehive
 * @apiGroup Beehive
 * @apiVersion 1.0.0
 *
 * @apiParam {String} name Name of the beehive
 * @apiParam {String} identifier Technical identifier
 * @apiParam {String} occupation Current occupation in percent
 * @apiParam {String} memo A quick note space
 *
 * @apiErrorExample 400
 *  HTTP 400 Missing parameters
 *
 * @apiSuccess {String} message OK
 */
router.post('/', Hive.create);

router.patch('/:id', Hive.update);

router.get('/:id', Hive.get);

router.get('/search/:search', Hive.getAll);
router.get('/', Hive.getAll);

module.exports = router;
