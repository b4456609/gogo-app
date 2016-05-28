function drawRadiulProgress(data) {
  console.log(data)
  var sum = data.weather + data.air + data.uv + data.rain + data.predict;

  var avg = sum / 5;

  var calories = new RadialProgressChart('.score', {
    diameter: 200,
    shadow: {
      width: 1
    },
    max: 100,
    round: true,
    series: [{
      labelStart: '\uF105',
      value: avg,
      color: ['red', 'green']
    }],
    center: {
      content: [
        function(value) {
          return value;
        },
        ' OF 100'
      ],
      y: 25
    }
  });
}
