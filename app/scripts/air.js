function PmChart() {
  this.ctx = document.getElementById('pmChart');
  this.chart = null;
}

PmChart.prototype.draw = function (data) {
  this.chart = new Chart(this.ctx, {
    type: 'line',
    data: {
      labels: this.timeToString(data.time),
      datasets: [{
        label: 'pm2.5',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: data.pm2_5,
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            suggestedMax: 100,
            suggestedMin: 0,
            callback: function (value) { return '' + value + 'μg/m3' }
          }
        }]
      }
    }
  });
}

PmChart.prototype.timeToString = function (time) {
  var timeres = time.map(function (i) {
    return moment(i).tz('Asia/Taipei').format('M/D HH:mm')
  })
  return timeres;
}

PmChart.prototype.update = function (data) {
  console.log(data);
  this.chart.data.labels = this.timeToString(data.time);
  this.chart.data.datasets[0].data = data.pm2_5;
  this.chart.update();
}

var pmChart = new PmChart();

function PsiChart() {
  this.ctx = document.getElementById('psiChart');
  this.chart = null;
}

PsiChart.prototype.draw = function (data) {
  this.chart = new Chart(this.ctx, {
    type: 'line',
    data: {
      labels: this.timeToString(data.time),
      datasets: [{
        label: 'psi',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: data.psi,
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            suggestedMax: 71,
            suggestedMin: 0,
            callback: function (value) { return '' + value }
          }
        }]
      }
    }
  });
}

PsiChart.prototype.timeToString = function (time) {
  var timeres = time.map(function (i) {
    return moment(i).tz('Asia/Taipei').format('M/D HH:mm')
  })
  return timeres;
}

PsiChart.prototype.update = function (data) {
  console.log(data);
  this.chart.data.labels = this.timeToString(data.time);
  this.chart.data.datasets[0].data = data.psi;
  this.chart.update();
}

var psiChart = new PsiChart();
