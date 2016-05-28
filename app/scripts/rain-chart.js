function RainChart() {
  this.ctx = document.getElementById('rainChart');
  this.chart = null;
}

RainChart.prototype.draw = function (data) {
  this.chart = new Chart(this.ctx, {
    type: 'bar',
    data: {
      labels: this.timeToString(data.time),
      datasets: [{
        label: '降雨量',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: data.rain,
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            suggestedMax: 5,
            suggestedMin: 0,
            callback: function (value) { return '' + value + 'mm' }
          }
        }]
      }
    }
  });
}

RainChart.prototype.timeToString = function (time) {
  var timeres = time.map(function (i) {
    return moment(i).tz('Asia/Taipei').format('M/D HH:mm')
  })
  return timeres;
}

RainChart.prototype.update = function (data) {
  console.log(data);
  this.chart.data.labels = this.timeToString(data.time);
  this.chart.data.datasets[0].data = data.rain;
  this.chart.update();
}

var rainChart = new RainChart();