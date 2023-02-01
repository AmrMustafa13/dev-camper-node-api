const mongoose = require("mongoose");

const connectDB = () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red);
  }
};

module.exports = connectDB;
