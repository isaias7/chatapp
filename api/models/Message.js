const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Message = new Schema({
  content: String,
});

module.exports = mongoose.model('Message',Message);
