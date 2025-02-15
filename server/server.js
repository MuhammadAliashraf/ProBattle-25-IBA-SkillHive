const settingsRouter = require('./routes/user');
const productRouter = require('./routes/product');
const authRouter = require('./routes/auth');
require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const auth = require('./middleware/authentication');
const ConnectDB = require('./config/connectme');
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const packageJson = require('./package.json');
app.set('trust proxy', 1);

app.use(express.json());
// extra packages
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(bodyParser.json({ limit: '100mb' })); // Set the limit according to your requirements

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));

// routes

app.use('/api/auth', authRouter);
app.use('/api/product', auth, productRouter);
app.use('/api/settings', auth, settingsRouter);
// app.use('/api/jobs', auth, jobRouter);

app.get('/', (req, res) => {
  res.send(`Welcome to my api having current version ${packageJson.version}`);
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await ConnectDB(process.env.DB_URL);
    app.listen(port, () =>
      console.log(
        `Server is listening on Port 
        http://localhost:${port}
        `
      )
    );
  } catch (error) {
    console.log('Database connection fail', error);
    process.exit(1);
  }
};

start();
