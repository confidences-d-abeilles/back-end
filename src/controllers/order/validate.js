

const Subscription = require('../../models/subscription');
const Order = require('../../models/order');
const { SERV_ERR, OK, MISS_PARAM } = require('../../messages');
const { logDebug, logError } = require('@cda/logger');

const validate = async ({ params }, res) => {
  try {
    if (!params.orderId) {
      return res.status(400).send(MISS_PARAM);
    }
    const order = await new Order().findOne({ id: params.orderId }, { toJson: false });
    order.status = 2;
    await Promise.all(order.products.map(async product => {
      if (product.duration) {
        return Promise.all(Array(product.quantity).fill(null).map(async () => {
          const end = new Date(Date.now() + product.duration * 3600 * 1000);
          const newSubscription = new Subscription({
            product: product.id,
            user: order.user,
            status: 0,
            start: new Date().toISOString(),
            end: end.toISOString(),
          });
          return newSubscription.save();
        }));
      }
    }));
    await order.save();
    return res.status(200).send(OK);
  } catch (e) {
    logError(e);
    return res.status(500).send(SERV_ERR);
  }
};


module.exports = validate;
