const mongoose = require('mongoose');

global.dbError = null;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`📡 MongoDB Connected: ${conn.connection.host}`);
    global.dbError = "Connected Successfully";
  } catch (error) {
    global.dbError = error.message;
    console.error(`⚠️ Database Warning: ${error.message} (Server continuing in offline mode)`);
  }
};

module.exports = connectDB;
