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
  fetchData();
})();

function draw(data) {
  drawRadiulProgress(data.radar);
  drawRadar(data.radar);
  drawTempHumid(data.tempHumidRainChart);
  pharseMetricsDataAndShow(data.metric);
}

function pharseMetricsDataAndShow(data) {

  var val = {
    temp:data.temp,
    humd:Math.round(data.humd),
    uv:data.uv,
    pm2_5:data.pm2_5,
    psi:data.psi,
    sunset:data.sunset,
    sunrise:data.sunrise,
    wind:data.wind,
  }

  show_metrics(val);
}

function fetchData() {
  var jqxhr = $.getJSON('http://localhost:5000/')
    .done(function(json) {
      console.log(json)
      draw(json);
    })
    .fail(function(jqxhr, textStatus, error) {
      var err = textStatus + ', ' + error;
      console.log('Request Failed: ' + err);
    })
}
