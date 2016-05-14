function drawRadiulProgress(data) {
  console.log(data)
  var sum = 0;
  var size = 0;
  for(var key in data) {
      sum += data[key];
      size++;
  }

  var avg = sum / size;

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
