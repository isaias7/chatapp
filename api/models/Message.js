const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  content: String,
});

module.exports = mongoose.model('Message',MessageSchema);
