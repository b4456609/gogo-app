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
  var data1 = [{"d":0,"count":53,"avg":1.4597531553472},{"d":10,"count":225,"avg":1.2468490525552},{"d":20,"count":619,"avg":1.75848956583},{"d":30,"count":3873,"avg":3.5556519560699},{"d":40,"count":5623,"avg":4.4943407969917},{"d":50,"count":3050,"avg":4.3098579000244},{"d":60,"count":1687,"avg":4.1738573339737},{"d":70,"count":1063,"avg":4.1447729051386},{"d":80,"count":724,"avg":3.9257579572111},{"d":90,"count":518,"avg":4.2043615147746},{"d":100,"count":444,"avg":3.6527753506078},{"d":110,"count":382,"avg":3.3460008028067},{"d":120,"count":482,"avg":3.0968895317471},{"d":130,"count":508,"avg":3.8017348397296},{"d":140,"count":715,"avg":4.2306773727965},{"d":150,"count":829,"avg":4.5105016429249},{"d":160,"count":897,"avg":5.3887125853608},{"d":170,"count":806,"avg":5.6849160472344},{"d":180,"count":896,"avg":6.5112502612324},{"d":190,"count":839,"avg":6.7362343026962},{"d":200,"count":746,"avg":6.8745840405212},{"d":210,"count":790,"avg":6.9718142111131},{"d":220,"count":774,"avg":6.6137794926754},{"d":230,"count":733,"avg":4.8758970401446},{"d":240,"count":846,"avg":3.7229058339196},{"d":250,"count":1422,"avg":3.7791162732993},{"d":260,"count":20829,"avg":5.3057286407095},{"d":270,"count":2129,"avg":4.3066451096437},{"d":280,"count":1280,"avg":3.7290548283839},{"d":290,"count":939,"avg":3.5564079321762},{"d":300,"count":420,"avg":2.4953385002774},{"d":310,"count":162,"avg":1.0702146649001},{"d":320,"count":154,"avg":1.2590508268139},{"d":330,"count":137,"avg":1.0744041039111},{"d":340,"count":110,"avg":1.1266111293968},{"d":350,"count":139,"avg":1.1369643519188},{"d":360,"count":74,"avg":1.2867378056263},{"d":null,"count":52840,"avg":0}];

  var windrose = new WindRose();
  windrose.drawBigWindrose(data.windChart, "#windrose", "Frequency by Direction");
  windrose.drawBigWindrose(data.windChart, "#windroseavg", "Average Speed by Direction");
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
