function drawTempHumid(data) {

  var time = data.time.map(function(i) {
    return moment(i).tz('Asia/Taipei').format('M/D HH:mm')
  })
  drawTempHumidChart(time, data.temp, data.humid);
  drawRainChart(time, data.rain);
}

function drawTempHumidChart(labels, temp, humid, rain) {
  console.log(labels, temp, humid)
  var ctx1 = document.getElementById('tempChart');
  var myChart1 = new Chart(ctx1, {
    type: 'line',
    data: {
      labels: labels,
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
        data: temp,
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
        data: humid,
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
            fontColor:'rgba(255,99,132,1)',
            callback:function (value) { return '' + value + '°C'}
          }
        }, {
          id: 'humidy',
          ticks: {
            suggestedMax: 100,
            suggestedMin: 50,
            fontColor:'rgba(54,162,235,1)',
            callback:function (value) { return '' + value + '％'}
          }
        }]
      }
    }
  });
}

function drawRainChart(time, rain) {
  var ctx = document.getElementById('rainChart');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: time,
      datasets: [{
        label: '降雨量',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: rain,
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            suggestedMax: 5,
            suggestedMin: 0,
            callback:function (value) { return '' + value + 'mm'}
          }
        }]
      }
    }
  });
}
