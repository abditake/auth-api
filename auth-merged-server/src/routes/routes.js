'use strict';

const express = require('express');
const basicAuth = require('../middleware/basic.js')
const bearerAuth = require('../middleware/bearer.js')
const permissions = require('../middleware/acl.js')
const router = express.Router();
const { 
  handleGetAll,
  handleGetOne,
  handleCreate,
  handleUpdate,
  handleDelete,
  handleSignup,
  handleSignin,
  handleUsers,
  handleSecret,
} = require('./handler');

router.param('model', (req, res, next) => {
  const modelName = req.params.model;
  if (dataModules[modelName]) {
    req.model = dataModules[modelName];
    next();
  } else {
    next('Invalid Model');
  }
});

router.get('/:model', handleGetAll);
router.get('/:model/:id', handleGetOne);
router.post('/:model', handleCreate);
router.put('/:model/:id', handleUpdate);
router.delete('/:model/:id', handleDelete);
router.post('/signup', handleSignup);
// import both Basic and Bearer auth for code below
router.post('/signin', basicAuth, handleSignin);
router.get('/secret', bearerAuth, handleSecret);
// import permission for route below
router.get('/users', bearerAuth, permissions('delete'), handleUsers);

module.exports = router;
