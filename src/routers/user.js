const { Router } = require('express');
const {
  auth, signUp, get, refresh, getAll, update,
} = require('../controllers/user');
const ownerMiddleware = require('../utils/owner');

const router = Router();

/**
 * @api {post} /user/auth Generate a new Jwt
 * @apiName Authenticate
 * @apiGroup User
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
 * @api {post} /user/signup Create a new user
 * @apiName SignUp
 * @apiGroup User
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
 * @apiSuccess {String} message OK
 */
router.post('/signup', signUp);

/**
 * @api {post} /user/renew Renew a Jwt with an expired accessToken and a refreshToken
 * @apiName Refresh
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiParam {String} accessToken An expired access token
 * @apiParam {String} refreshToken An valid refresh token
 *
 * @apiErrorExample 401
 *  HTTP 401 Invalid credentials
 * @apiErrorExample 400
 *  HTTP 400 Missing parameters
 *
 * @apiSuccess {String} accessToken Newly created access token
 * @apiSuccess {String} renewToken Newly created renew token
 */
router.post('/renew', refresh);

router.use(ownerMiddleware);

/**
 * @api {get} /user Renew a Jwt with an expired accessToken and a refreshToken
 * @apiName Refresh
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiSuccess {Object} user My personal user object
 */
router.get('/', get);

/**
 * @api {get} /user/all Get all users
 * @apiName GetAll
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiSuccess {Array} users A complete list of all users
 */
router.get('/all', getAll);
router.get('/:id', get);

router.patch('', update);

module.exports = router;
