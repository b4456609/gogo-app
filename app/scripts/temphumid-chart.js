function TempChart() {
  this.ctx = document.getElementById('tempChart');
  this.chart = null;
}

TempChart.prototype.draw = function (data) {
  this.chart = new Chart(this.ctx, {
    type: 'line',
    data: {
      labels: this.timeToString(data.time),
      datasets: [{
        label: '溫度',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(255,99,132,0.4)',
        borderColor: 'rgba(255,99,132,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(255,99,132,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: data.temp,
        yAxisID: 'tempy'
      }, {
          label: '濕度',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(54,162,235,0.4)',
          borderColor: 'rgba(54,162,235,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(54,162,235,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(54,162,235,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: data.humid,
          yAxisID: 'humidy'
        }]
    },
    options: {
      scales: {
        yAxes: [{
          id: 'tempy',
          ticks: {
            suggestedMax: 34,
            suggestedMin: 14,
            fontColor: 'rgba(255,99,132,1)',
            callback: function (value) { return '' + value + '°C' }
          }
        }, {
            id: 'humidy',
            ticks: {
              suggestedMax: 100,
              suggestedMin: 50,
              fontColor: 'rgba(54,162,235,1)',
              callback: function (value) { return '' + value + '％' }
            }
          }]
      }
    }
  });
}

TempChart.prototype.timeToString = function (time) {
  var timeres = time.map(function (i) {
    return moment(i).tz('Asia/Taipei').format('M/D HH:mm')
  })
  return timeres;
}

TempChart.prototype.update = function (data) {
  console.log(data);
  this.chart.data.labels = this.timeToString(data.time);
  this.chart.data.datasets[0].data = data.temp;
  this.chart.data.datasets[1].data = data.humid;
  this.chart.update();
}

var tempChart = new TempChart();