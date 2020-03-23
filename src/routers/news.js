
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
 *
 * @apiErrorExample 400
 *  HTTP 400 Missing parameters
 *
 * @apiSuccess {String} message OK
 */
router.post('/', News.create);

module.exports = router;
