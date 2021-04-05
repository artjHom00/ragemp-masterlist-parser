const mongoose = require("mongoose");
const config = require("../config");

let db = mongoose.createConnection(config.connectionUrl, { 
  useNewUrlParser: true,
  useUnifiedTopology: true
});

db.on("error", function () {
  console.log("[db] error while connecting!");
});

db.once("open", function () {
  console.log("[db] connected successfully!");
});

module.exports = db;