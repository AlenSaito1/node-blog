const mongoose = require('mongoose');

const connectDB = () => {
  return mongoose.connect('mongodb://10.3.6.122:27017/raghav', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
};

module.exports = connectDB;
