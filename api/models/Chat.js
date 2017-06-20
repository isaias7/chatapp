const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  reciver: [],
  transmitter: [],
  messages: [],
});

module.exports = mongoose.model('Chat', ChatSchema);
