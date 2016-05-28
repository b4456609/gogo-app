function SpeedChart() {
  this.ctx = document.getElementById('speedChart');
  this.chart = null;
}

SpeedChart.prototype.draw = function (data) {
  var time = [], speed = [], ele = [];
  while (true) {
    var i = data.shift();
    var j = data.shift();
    var k = data.shift();

    if (i && j && k) {
      time.push(new Date((new Date(i.time).getTime() + new Date(j.time).getTime() + new Date(k.time).getTime()) / 3));
      speed.push((i.speed + j.speed + k.speed) / 3);
      ele.push((i.elevation + j.elevation+ k.elevation)/3);
    }
    else {
      break;
    }

  }


  time = this.timeToString(time);

  this.chart = new Chart(this.ctx, {
    type: 'line',
    data: {
      labels: time,
      datasets: [{
        label: '速度',
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
        data: speed
      },{
        label: '高度',
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
        data: ele
      }]
    },
    options: {
    }
  });
}

SpeedChart.prototype.timeToString = function (time) {
  var timeres = time.map(function (i) {
    return moment(i).tz('Asia/Taipei').format('HH:mm:s')
  })
  return timeres;
}

SpeedChart.prototype.update = function (data) {
  console.log(data);
  this.chart.data.labels = this.timeToString(data.time);
  this.chart.data.datasets[0].data = data.temp;
  this.chart.data.datasets[1].data = data.humid;
  this.chart.update();
}

var speedChart = new SpeedChart();