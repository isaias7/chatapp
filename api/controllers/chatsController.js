// Chats Controller
const mongoose = require('mongoose');
const Chat = require('../models/Chat');

exports.getChats = (req, res) => {
  console.log('Ver usuarios');
  Chat.find().exec(function (err, res) {
    res.status(200);
    res.json(data);
  });
};

exports.createChats = (req, res) => {
  console.log('Create chat');
  const chat = new Chat(req.body);
  //chat.name=body.name;
  //console.log(chat);
  //console.log(req.body);
  chat.save(err => {
    if (err) {
      res.status(404);
      res.json(err);
    } else {
      res.status(201);
      res.json(chat);
    }
  });
};

exports.deleteChat = (req, res) => {
  consol.log('Delete chat');
  //console.log(req);
  Chat.findByIdAndRemove(req.params.id, (err, data) => {
    if (!err) {
      res.status(204).json({});
    } else {
      res.status(500).json({});
    }
  });
};

exports.updateChat = (req, res) => {
  console.log('Update chat');
  Chat.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
    if (!err) {
      res.status(201).json({});
    } else {
      res.status(500).json({});
    }
  });
};
