const mongoose = require('mongoose');

let MONGO_URI = 'mongodb: //127.0.0.1:27017/salonDatabase';

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log('Sucessfully connected to MongoDB.');
  })
  .catch((e) => {
    console.error('Connection error, e.message');
  });
const db = mongoose.connection;
module.exports = db;
