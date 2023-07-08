const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

// connect to DB
const connectDB = (url) => {
  return mongoose.connect(url);
};

module.exports = connectDB;
