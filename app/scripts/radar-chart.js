function drawRadar(data) {
  var ctx = document.getElementById('radarChart');
  var data = {
    labels: [
      'Weather',
      'Air',
      'UV',
      'Rain',
      '預報'
    ],
    datasets: [{
      label: 'Run',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [data.weather, data.air, data.uv, data.rain, data.predict]
    }]
  };

  var myChart = new Chart(ctx, {
    type: 'radar',
    data: data,
    options: {
      scale: {
        reverse: false,
        ticks: {
          beginAtZero: true
        }
      }
    }
  });
}
