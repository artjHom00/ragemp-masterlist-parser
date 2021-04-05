console.clear();
// server modules
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const routes = require("./routes/mainRoutes");

// db modules
const mongoose = require("mongoose");
const serverModel = require("./db/model");
// setting up server
app.use("/", routes);
app.set("view engine", "ejs");
app.use(express.static("public"));
server.listen(80);
console.log("[live] server started!");

io.on("connection", socket => {
  console.log("new connection - ", socket.id);
  socket.on("search", (ipAddr) => {
    serverModel.find({ip: ipAddr}, function(err, result) {
      if (err) {
        socket.emit("error", "Server not found!");
      } else {
        socket.emit("found", result);
      }
    });
  });
});