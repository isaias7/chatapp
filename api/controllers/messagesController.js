// Messages Controller
const mongoose = require('mongoose');
const Message = require('../models/Message');

exports.getMessages = (req, res) => {
  console.log('Ver usuarios');
  Message.find().exec(function (err, res) {
    res.status(200);
    res.json(data);
  });
};

exports.createMessages = (req, res) => {
  console.log('Create message');
  const message = new Message(req.body);
  //message.name=body.name;
  //console.log(message);
  //console.log(req.body);
  message.save(err => {
    if (err) {
      res.status(404);
      res.json(err);
    } else {
      res.status(201);
      res.json(message);
    }
  });
};

exports.deleteMessage = (req, res) => {
  consol.log('Delete message');
  //console.log(req);
  Message.findByIdAndRemove(req.params.id, (err, data) => {
    if (!err) {
      res.status(204).json({});
    } else {
      res.status(500).json({});
    }
  });
};

exports.updateMessage = (req, res) => {
  console.log('Update message');
  Message.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
    if (!err) {
      res.status(201).json({});
    } else {
      res.status(500).json({});
    }
  });
};