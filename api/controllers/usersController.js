// Users Controller
const mongoose = require('mongoose');
const User = require('../models/User');

exports.getUsers = (req, res) => {
  console.log('Ver usuarios');
  User.find().exec(function (err, data) {
    res.status(200);
    res.json(data);
  });
};

exports.createUsers = (req, res) => {
  console.log('Create user');
  const user = new User(req.body);
  //user.name=body.name;
  // console.log(user);
  //console.log(req.body);
  user.save(err => {
    if (err) {
      res.status(404);
      res.json(err);
    } else {
      res.status(201);
      res.json(user);
    }
  });
};

exports.deleteUser = (req, res) => {
  console.log('Delete user');
  //console.log(req);
  User.findByIdAndRemove(req.params.id, (err, data) => {
    if (!err) {
      res.status(204).json({});
    } else {
      res.status(500).json({});
    }
  });
};

exports.updateUser = (req, res) => {
  console.log('Update user');
  User.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
    if (!err) {
      res.status(201).json({});
    } else {
      res.status(500).json({});
    }
  });
};
