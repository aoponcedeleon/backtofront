const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    mongoose.set("bufferCommands", false);
    await mongoose.connect(
      db,
      {
        // uri_decode_auth: true,
        useNewUrlParser: true,
        useCreateIndex: true
      },
      function(err, db) {}
    );

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with Failure
    process.exit(1);
  }
};

module.exports = connectDB;