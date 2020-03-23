const { Router } = require('express');
const { auth, signUp } = require('../controllers/user');

const router = Router();


/**
 * @api {post} /auth Generate a new Jwt
 * @apiName Authenticate
 * @apiVersion 1.0.0
 *
 * @apiParam {String} email Email address
 * @apiParam {String} password Password
 *
 * @apiErrorExample 401
 *  HTTP 401 Invalid credentials
 * @apiErrorExample 400
 *  HTTP 400 Missing parameters
 *
 * @apiSuccess {String} accessToken Newly created access token
 * @apiSuccess {String} renewToken Newly created renew token
 */
router.post('/auth', auth);

/**
 * @api {post} /signup Create a new user
 * @apiName SignUp
 * @apiVersion 1.0.0
 *
 * @apiParam {String} email Email address
 * @apiParam {String} password Password
 * @apiParam {String} gender Gender, either 'male' or 'female'
 * @apiParam {String} firstname Firstname
 * @apiParam {String} name Name
 * @apiParam {String} phone Phone
 *
 * @apiErrorExample 400
 *  HTTP 400 Missing parameters
 *
 * @apiSuccess {String} accessToken Newly created access token
 * @apiSuccess {String} renewToken Newly created renew token
 */
router.post('/signup', signUp);

module.exports = router;
