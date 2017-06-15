const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Chat = new Schema({
  reciver: [],
  transmitter: [],
  messages: [],
});

module.exports = mongoose.model('Chat', Chat);
