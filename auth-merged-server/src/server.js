'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Esoteric Resources
const errorHandler = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');
const router = require('./routes/routes');
const logger = require('./middleware/logger.js');

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());
app.use(morgan('dev'));
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes

// * REALLY IFFY ABOUT THIS  HOW WOULD IT GRAB THE RIGHT ROUTE AND HANDLER IT NEEDS * This is not intuitive

app.use(router);
app.use('/api/v1', router);

// Catchalls
app.use(notFound);
app.use(errorHandler);

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server Up on ${port}`);
    });
  },
};
