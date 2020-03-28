
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

router.get('/:id', Hive.get);

module.exports = router;
