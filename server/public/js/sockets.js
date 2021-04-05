$(function () {
  let ctxPlayers = document.getElementById('myChart').getContext('2d');
  let ctxPeak = document.getElementById('myChartPeak').getContext('2d');
  let ctxMax = document.getElementById('myChartMax').getContext('2d');
  let socket = io.connect();

  socket.on("found", data => {
    let timeKeys = [];
    let playersKeys = [];
    let peakKeys = [];
    let maxKeys = [];
    let colors = [];

    for(let i = 0; i < data.length; i++) {
        timeKeys.push(data[i].date);
        playersKeys.push(data[i].players);
        peakKeys.push(data[i].peak);
        maxKeys.push(data[i].maxplayers);
        colors.push("rgba(0, 0, 0, 0.3)");
    }

    buildChart(ctxPlayers, timeKeys, "# of players", playersKeys, colors);
    buildChart(ctxPeak, timeKeys, "peak players", peakKeys, colors);
    buildChart(ctxMax, timeKeys, "max players", maxKeys, colors);
  })


  $("#search").click(function(e) {
    e.preventDefault();

    const serverIp = $("#serverIp").val();
    socket.emit("search", serverIp)
  });
  
});