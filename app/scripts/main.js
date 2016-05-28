(function() {
  'use strict';
  Chart.defaults.global.maintainAspectRatio = false;
  moment.locale('zh-tw');
  fetchData(draw);
})();

function draw(data) {
  drawRadiulProgress(data.radar);
  drawRadar(data.radar);
  tempChart.draw(data.tempHumidRainChart);
  rainChart.draw(data.tempHumidRainChart);
  show_metrics(data.metric, data.metricTime);
  predictChart(data.predict)
  
  var windrose = new WindRose();
  windrose.drawBigWindrose(data.windChart, '#windrose', 'Frequency by Direction');
  windrose.drawBigWindrose(data.windChart, '#windroseavg', 'Average Speed by Direction');
}


function fetchData(callback, fromDatetime, toDatetime) {
  var data = {};
  if(fromDatetime && toDatetime){
    data.start = fromDatetime;
    data.end = toDatetime;
  }
  var jqxhr = $.getJSON('http://140.121.101.164:5000/',data)
    .done(function(json) {
      console.log(json)
      callback(json);
    })
    .fail(function(jqxhr, textStatus, error) {
      var err = textStatus + ', ' + error;
      console.log('Request Failed: ' + err);
    })
}

function updateData(interval){
  $('#data_interval').html('過去'+interval+'小時<span class="caret"></span>');
  var date = moment().subtract(interval, 'hours');
  var fromDatetime = date.toISOString();
  var toDatetime = moment().toISOString();
  console.log(interval, fromDatetime, toDatetime);
  fetchData(updateChart, fromDatetime, toDatetime);
}

function updateChart(data) {
  tempChart.update(data.tempHumidRainChart);
  rainChart.update(data.tempHumidRainChart);
  var windrose = new WindRose();
  windrose.updateWindVisDiagrams(data.windChart);
}