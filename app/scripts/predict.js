function predictChart(data) {
	console.log(data);
	console.log('time' in data);
  if(!('time' in data))
    return;

	var time = data.time.map(function(i) {
    return moment(i).tz('Asia/Taipei').format('M/D HH時')
  });

	var predict = [];
	for(var i in data.predictRate){
		predict.push(data.predictRate[i]);
		predict.push(data.predictRate[i]);
		predict.push(data.predictRate[i]);
		predict.push(data.predictRate[i]);
	}

	console.log(predict)

  var ctx1 = document.getElementById('predict');
  var myChart1 = new Chart(ctx1, {
    type: 'line',
    data: {
      labels: time,
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
      }, {
        label: '降雨機率',
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
        data: predict,
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
            suggestedMin: 0,
            fontColor:'rgba(54,162,235,1)',
            callback:function (value) { return '' + value + '％'}
          }
        }]
      }
    }
  });
}
