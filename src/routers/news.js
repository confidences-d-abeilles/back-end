
const { Router } = require('express');

const router = Router();

const News = require('../controllers/news');

/**
 * @api {post} /news Creates a news
 * @apiName CreateNews
 * @apiGroup News
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
router.post('/', News.create);

module.exports = router;
