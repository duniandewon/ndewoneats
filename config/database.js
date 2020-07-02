const mongoose = require('mongoose');

const URI = process.env.MONGO_DEV_URI;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connect = mongoose.createConnection(URI, options);

module.exports = connect;
