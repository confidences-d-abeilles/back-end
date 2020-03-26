
const { Router } = require('express');

const { create } = require('../controllers/address');

const router = Router();

/**
 * @api {post} /address Creates an address
 * @apiName CreateAddress
 * @apiGroup Address
 * @apiVersion 1.0.0
 *
 * @apiParam {String} gender Gender, either male or female
 * @apiParam {String} firstname Firstname
 * @apiParam {String} name Name
 * @apiParam {String} line1 First line of the address
 * @apiParam {String} line2 Second line of the address
 * @apiParam {String} zipcode Postal code
 * @apiParam {String} city City
 * @apiParam {String} country Country
 *
 * @apiErrorExample 400
 *  HTTP 400 Missing parameters
 *
 * @apiSuccess {String} message OK
 */
router.post('/:type?', create);

module.exports = router;
