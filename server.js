const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const path = require('path');

// import config
dotenv.config({ path: './config/config.env' });
// import routes
const transactions = require('./routes/transactions');
// import DB
const connectDB = require('./config/db');
connectDB();

// define app and routes
const app = express();
app.use(express.json()); //body parser
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use('/api/v1/transactions', transactions);

// check for production ---> DEPLOYMENT
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  // for any request other than api routes, serve up the static content located at path.resolve(...)
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

// listen
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on Port ${PORT}`.yellow.bold
  )
);
