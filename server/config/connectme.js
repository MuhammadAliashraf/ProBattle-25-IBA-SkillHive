const mongoose = require('mongoose');

const ConnectDB = (url) => {
  return (connectionInstance = mongoose.connect(url, {
    // useNewUrlParser: true,
    // // useCreateIndex: true,
    // // useFindAndModify: false,
    // useUnifiedTopology: true,
  }));
};

module.exports = ConnectDB;
