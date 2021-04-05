const cron = require("node-cron");
const request = require("request");

module.exports = (i, callback) => {
  cron.schedule(i, async () => {
    request('https://cdn.rage.mp/master/', function (err, res, body) {
      if(err) {
        callback(new Error("Error while parsing!"));
      } else {
        callback(body);
      }
    });
  });
}
