'use strict';

const { sequelize } = require('./src/models');
const server = require('./src/server.js');


sequelize.sync().then(() => {
  console.log('Plugged into Database!')
  server.start();
});
