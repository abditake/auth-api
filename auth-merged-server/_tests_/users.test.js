'use strict';

const jwt = require('jsonwebtoken');
const { users, db } = require('../src/models');
const SECRET = process.env.API_SECRET || 'secretstring';

beforeAll (async () => {
  await db.sync();
});

afterAll (async () => {
  await db.drop();
  // if tests aren't passing maybe its a multiple - async issue
  // await db.close();
});

describe('usersModel Tests', () => {
  test('User should have a token', async () => {
    const testUser = await users.create({username: 'Ryan', password: 'pass123'});
    const { token } = testUser;
    const validToken = jwt.verify(testUser.token , SECRET);

    expect(token).toBeTruthy();
    expect(validToken).toBeTruthy();
  });
});
