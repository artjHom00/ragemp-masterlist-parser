const connection = require("./connection");
const mongoose = require("mongoose");
const Schema = mongoose.Schema; 
let serverModel = new Schema({
  name: String,
  gamemode: String,
  url: String,
  lang: String,
  players: Number,
  peak: Number,
  maxplayers: Number,
  ip: String,
  date: Date
});

module.exports = connection.model("serverModel", serverModel);