/*!
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the 'License');
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an 'AS IS' BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
/* eslint-env browser */

(function() {
  'use strict';
  Chart.defaults.global.maintainAspectRatio = false;
  fetchData(draw);
})();

function draw(data) {
  drawRadiulProgress(data.radar);
  drawRadar(data.radar);
  drawTempHumid(data.tempHumidRainChart);
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
  var date = moment().subtract(interval, 'hours');
  var fromDatetime = date.toISOString();
  var toDatetime = moment().toISOString();
  console.log(interval, fromDatetime, toDatetime);
  fetchData(updateChart, fromDatetime, toDatetime);
}

function updateChart(data) {
  drawTempHumid(data.tempHumidRainChart);
  var windrose = new WindRose();
  windrose.updateWindVisDiagrams(data.windChart);
}