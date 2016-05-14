function drawRadar(data) {
  var ctx = document.getElementById('radarChart');
  var data = {
    labels: [
      'Weather',
      'Air',
      'Rain',
      'Sun',
      'UV'
    ],
    datasets: [{
      label: 'Run',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [data.weather, data.air, data.rain, data.sun,data.uv]
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
