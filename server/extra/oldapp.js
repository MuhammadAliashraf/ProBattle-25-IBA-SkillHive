const supplierRouter = require('../routes/supplier');
const expenseheadRouter = require('../routes/expensehead');
const saleRouter = require('../routes/sale');
const reportRouter = require('../routes/report');
const orderitemRouter = require('../routes/orderitem');
const orderRouter = require('../routes/order');
const paymentRouter = require('../routes/payment');
const expensegroupRouter = require('../routes/expensegroup');
const productRouter = require('../routes/product');
const categoryRouter = require('../routes/category');
require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const auth = require('../middleware/authentication');
const authRouter = require('../routes/auth');
const ConnectDB = require('../config/connectme');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerconf = require('../config/openapi.json');
//NOTE: error handler
const notFoundMiddleware = require('../middleware/not-found');
const errorHandlerMiddleware = require('../middleware/error-handler');
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const limiter = require('express-rate-limit');
const path = require('path');

app.set('trust proxy', 1);

// app.use(
//   limiter({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
//   })
// );
app.use(express.json());
// extra packages
app.use(helmet());
app.use(cors({ origin: '*' }));
app.use(xss());
app.use(bodyParser.json({ limit: '100mb' })); // Set the limit according to your requirements

// serve static files from the build folder
// const __dirname= path.dirname("")
//  const build = path.join(__dirname, '../client-app/dist');
//  app.use(express.static(build));

// app.use(express.static(path.join(__dirname, '../client-app/dist')));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));

// serve swagger http://localhost:3000/api/docs
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerconf));

// routes

app.use('/api/auth', authRouter);
//auth, added in category
app.use('/api/category', auth, categoryRouter);
app.use('/api/product', auth, productRouter);
app.use('/api/supplier', auth, supplierRouter);
app.use('/api/expense-head', auth, expenseheadRouter);
app.use('/api/expense-group', auth, expensegroupRouter);
app.use('/api/order', auth, orderRouter);
app.use('/api/orderitem', auth, orderitemRouter);
app.use('/api/payment', paymentRouter);
app.use('/api/sale', auth, saleRouter);
app.use('/api/reports', auth, reportRouter);

// app.use('/api/jobs', auth, jobRouter);
app.get('/', (req, res) => {
  res.send('Welcome to my api');
});
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client-app/dist/index.html'));
// });

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await ConnectDB(process.env.DB_URL);
    app.listen(port, () =>
      console.log(`Server is listening on Port ${port}...`)
    );
  } catch (error) {
    console.log('Database connection fail', error);
    process.exit(1);
  }
};

start();
