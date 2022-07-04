'use strict';

const middleware = require('../src/middleware/bearer.js');
const { sequelize, users } = require('../src/models');
const jwt = require('jsonwebtoken');

let testUsers = {
  admin: { username: 'admin', password: 'password', role: 'admin' },
};

// // Pre-load our database with fake users
beforeAll(async () => {
  await sequelize.sync();
  await users.create(testUsers.admin);

});
afterAll(async () => {
  await sequelize.drop();

});

describe('Auth Middleware', () => {

  // Mock the express req/res/next that we need for each middleware call
  const req = {};
  const res = {};
  const next = jest.fn();
  describe('user authentication', () => {

    it('fails a login for a user (admin) with an incorrect token', () => {
      req.headers = {
        authorization: `Bearer thisIsABadToken`,
      };

      return middleware(req, res, next)
        .then(() => {
          expect(next).toHaveBeenCalled();
        });

    });

    it('logs in a user with a proper token', () => {

      const user = { username: 'admin' };
      const token = jwt.sign(user, process.env.SECRET || 'secretstring');

      req.headers = {
        authorization: `Bearer ${token}`,
      };

      return middleware(req, res, next)
        .then(() => {
          expect(next).toHaveBeenCalledWith();
        });

    });

  });

});
