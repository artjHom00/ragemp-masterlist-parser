const parser = require("./utils/parser");
const config = require("./config");
const serverModel = require("./db/model");

parser(config.cron, (res) => {
  let jsonEncoded;
  try {
    jsonEncoded = JSON.parse(res);
  } catch(e) {

  }
  if(jsonEncoded) {
    for(key in jsonEncoded) {
      let newServer = new serverModel({
        name: jsonEncoded[key].name,
        gamemode: jsonEncoded[key].gamemode,
        url: jsonEncoded[key].url,
        lang: jsonEncoded[key].lang,
        players: jsonEncoded[key].players,
        peak: jsonEncoded[key].peak,
        maxplayers: jsonEncoded[key].maxplayers,
        ip: key,
        date: new Date()
      });
      newServer.save(function (err) {
        if (err) return handleError(err);
      });
    }
  }
});