
const { Router } = require('express');
const { create, get, getAll } = require('../controllers/subscription');

const router = Router();

/**
 * @api {get} /subscription Get all my personal subscriptions
 * @apiName Get
 * @apiGroup Subscription
 * @apiVersion 1.0.0
 *
 * @apiErrorExample 400
 *  HTTP 400 Need authenticate
 *
 * @apiSuccess {Array} subscriptions All my subscriptions
 */
router.get('/', get);

router.get('/all', getAll);

/**
 * @api {post} /subscription Create a subscription
 * @apiName Create
 * @apiGroup Subscription
 * @apiVersion 1.0.0
 *
 * @apiParam {String} user A user id to link to
 * @apiParam {String} product A product id associated to this subscription
 *
 * @apiErrorExample 400
 *  HTTP 400 Missing parameters
 *
 * @apiSuccess {String} ok The subscription has been created
 */
router.post('/', create);

module.exports = router;
