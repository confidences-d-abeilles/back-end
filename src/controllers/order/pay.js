
const { logError } = require('@cda/logger');
const { getEnv } = require('@cda/env');

const Order = require('../../models/order');
const { MISS_PARAM, OK, SERV_ERR } = require('../../messages');

const env = getEnv();
const stripe = require('stripe')(env.STRIPE_SECRET);

const pay = async ({ params }, res) => {
  try {
    if (!params.orderId) {
      return res.status(400).send(MISS_PARAM);
    }
    const order = await new Order().findOne({ id: params.orderId });
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: order.products.map(({ name, price, quantity }) => ({
        name,
        amount: price,
        quantity,
        currency: 'eur',
      })),
      success_url: 'http://localhost:9000/dashboard',
      cancel_url: 'http://localhost:9000/dashboard',
    });
    return res.status(200).send(session);
  } catch (e) {
    logError(e);
    return res.status(500).send(SERV_ERR);
  }
};

module.exports = pay;
