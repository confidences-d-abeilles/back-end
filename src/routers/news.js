
const { Router } = require('express');

const router = Router();

const News = require('../controllers/news');

/**
 * @api {post} /news Creates a news
 * @apiName CreateNews
 * @apiGroup News
 * @apiVersion 1.0.0
 *
 * @apiParam {String} title Title of the article
 * @apiParam {String} content Content of the article
 * @apiParam {String} beehive Id of the beehive to attach to
 *
 * @apiErrorExample 400
 *  HTTP 400 Missing parameters
 *
 * @apiSuccess {String} message OK
 */
router.post('/', News.create);

/**
 * @api {put} /news Update a news
 * @apiName UpdateNews
 * @apiGroup News
 * @apiVersion 1.0.0
 *
 * @apiParam {String} id Id of the news to update
 * @apiParam {String} title Title of the article
 * @apiParam {String} content Content of the article
 * @apiParam {String} beehive Id of the beehive to attach to
 *
 * @apiErrorExample 400
 *  HTTP 400 Missing parameters
 *
 * @apiSuccess {String} message OK
 */
router.put('/:id', News.update);

module.exports = router;
