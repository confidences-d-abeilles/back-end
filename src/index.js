const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { logError, logSuccess } = require('@cda/logger');
const { checkEnv, getEnv } = require('@cda/env');

const { initDb } = require('./database');
const ownerMiddleware = require('./utils/owner');

const userRouter = require('./routers/user');
const addressRouter = require('./routers/address');
const beehiveRouter = require('./routers/beehive');
const newsRouter = require('./routers/news');
const orderRouter = require('./routers/order');
const productRouter = require('./routers/product');
const subscriptionRouter = require('./routers/subscription');

const mandatoryFields = [
  'JWT_SECRET',
  'JWT_EXPIRATION',
  'PGUSER',
  'PGHOST',
  'PGPASSWORD',
  'PGDATABASE',
  'PGPORT',
];

const app = express();
const port = 3000;

(async () => {
  try {
    const env = getEnv();
    checkEnv(env, mandatoryFields);
    await initDb();

    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(ownerMiddleware);
    app.use('/user', userRouter);
    app.use('/address', addressRouter);
    app.use('/beehive', beehiveRouter);
    app.use('/news', newsRouter);
    app.use('/order', orderRouter);
    app.use('/product', productRouter);
    app.use('/product', subscriptionRouter);

    app.listen(port, () => logSuccess(`Server started and listening on port ${port}`));
  } catch (e) {
    logError(e.message);
  }
})();
