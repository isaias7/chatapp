require('dotenv').config()

const app = require('./app');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const port = process.env.PORT;
const uristring = process.env.DB || 'localhost:27017/slack';

app.listen(3000, () => {
    console.log('Server runing on port 3000');
})

mongoose.connect(uristring)
.then(
    () => console.log('🤘 🤘 🤘 🤘 connected to mongo'),
    error => console.log(`🤕 🤕 🤕 🤕 mongo fail.\nDetails: ${error}`)
);
