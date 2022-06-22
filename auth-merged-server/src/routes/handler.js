'use strict';

const express = require('express');
const dataModules = require('../models');
const { users } = require('../models/users');
const router = express.Router();



async function handleGetAll(req, res) {
  let allRecords = await req.model.get();
  res.status(200).json(allRecords);
}

async function handleGetOne(req, res) {
  const id = req.params.id;
  let theRecord = await req.model.get(id)
  res.status(200).json(theRecord);
}

async function handleCreate(req, res) {
  let obj = req.body;
  let newRecord = await req.model.create(obj);
  res.status(201).json(newRecord);
}

async function handleUpdate(req, res) {
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await req.model.update(id, obj)
  res.status(200).json(updatedRecord);
}

async function handleDelete(req, res) {
  let id = req.params.id;
  let deletedRecord = await req.model.delete(id);
  res.status(200).json(deletedRecord);
}

async function handleSignup(req,res){
  try {
    let userRecord = await users.create(req.body);
    const output = {
      user: userRecord,
      token: userRecord.token
    };
    res.status(201).json(output);
  } catch (e) {
    next(e.message)
  }
}

async function handleSignin(req,res){
  const user = {
    user: req.user,
    token: req.user.token
  };
  res.status(200).json(user);
}

async function handleUsers(req,res){
  const userRecords = await users.findAll({});
  const list = userRecords.map(user => user.username);
  res.status(200).json(list);
}


async function handleSecret(req,res){
  res.status(200).send('Welcome to the secret area')
}


module.exports ={
  handleGetAll,
  handleGetOne,
  handleCreate,
  handleUpdate,
  handleDelete,
  handleSignup,
  handleSignin,
  handleUsers,
  handleSecret,
};
