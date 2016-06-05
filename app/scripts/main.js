(function() {
  'use strict';
  Chart.defaults.global.maintainAspectRatio = false;
  moment.locale('zh-tw');
  updateData(3);
})();

function draw(data) {
  drawRadiulProgress(data.radar);
  drawRadar(data.radar);
  tempChart.draw(data.tempHumidRainChart);
  rainChart.draw(data.tempHumidRainChart);
  psiChart.draw(data.air);
  pmChart.draw(data.air);
  show_metrics(data.metric, data.metricTime);
  predictChart(data.predict)

  var windrose = new WindRose();
  windrose.drawBigWindrose(data.windChart, '#windrose', 'Frequency by Direction');
  windrose.drawBigWindrose(data.windChart, '#windroseavg', 'Average Speed by Direction');
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
  psiChart.update(data.air);
  pmChart.update(data.air);
  var windrose = new WindRose();
  windrose.updateWindVisDiagrams(data.windChart);
}
