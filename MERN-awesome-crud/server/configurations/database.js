const mongoose = require("mongoose");
require("dotenv").config();

const dbURL = process.env.MONGO_DB_URL;

const configDatabase = async () => {
  try {
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = configDatabase;
