'use strict';

// 3rd Party Resources
const express = require('express');

const notFoundHandler = require('./error-handlers/404');

const authRoutes = require('./routes/auth');
const v1Routes = require('./routes/v1');
const v2Routes = require('./routes/v2');
const errorHandler = require('./error-handlers/500');

const PORT = process.env.PORT || 3002;

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(authRoutes);
app.use('/api/v1', v1Routes);
app.use('/api/v2', v2Routes);

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  server: app,
  start: () => {
    app.listen(PORT, () => {
      console.log(`Server Up on ${PORT}`);
    });
  },
};
