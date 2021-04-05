let buildChart = (ctx, labels, name, data, colors) => {
  return new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
          label: name,
          data: data,
          backgroundColor: colors,
          borderColor: colors,
          borderWidth: 1,
          pointRadius: 0
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
    }
});
}