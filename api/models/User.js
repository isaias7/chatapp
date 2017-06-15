const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema({
  name: String,
  pwd: String,
});

module.exports = mongoose.model('User', User);
