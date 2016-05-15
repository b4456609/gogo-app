function drawTempHumid(data) {

	var time = data.time.map(function (i) {
		console.log(i,moment(i))
		return moment(i).tz('Asia/Taipei').format('LT')
	})
  drawTempHumidChart(time, data.temp, data.humid, data.rain);
}

function drawTempHumidChart(labels, temp, humid, rain) {
  console.log(labels, temp, humid)
  var ctx1 = document.getElementById('tempChart');
  var myChart1 = new Chart(ctx1, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Temp',
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
        data: temp
      }, {
        label: 'humid',
        data: humid
      }, {
        label: 'rain',
        data: rain
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
