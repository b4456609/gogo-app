$(function() {
  var map = new L.Map('map');

  var url = 'http://otile{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.jpeg',
    attr = 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    service = new L.TileLayer(url, {
      subdomains: '1234',
      attribution: attr
    });

  var el = L.control.elevation();
  el.addTo(map);

	new L.GPX('./20160522050624-95154-data.gpx', {
    async: true
  }).on('loaded', function(e) {
    map.fitBounds(e.target.getBounds());
    console.log(e.target.get_name());
    console.log(e.target.get_distance());
    console.log(e.target.get_start_time());
    console.log(e.target.get_end_time());
    console.log(e.target.get_moving_time());
    console.log(e.target.get_moving_pace());
    console.log(e.target.get_elevation_gain());
    console.log(e.target.get_elevation_loss());
    // console.log(e.target.get_elevation_data())

    var total_duration = moment.duration(e.target.get_total_time());
    var moving_duration = moment.duration(e.target.get_moving_time());

    $('#dis').text(Math.round(e.target.get_distance())+'m');
    $('#start_time').text(moment(e.target.get_start_time()).tz('Asia/Taipei').format('LLLL'));
    $('#end_time').text(moment(e.target.get_end_time()).tz('Asia/Taipei').format('LLLL'));
    $('#total_time').text(total_duration.hours() + ':' + total_duration.minutes());
    $('#moving_time').text(moving_duration.hours() + ':' + moving_duration.minutes());
    $('#moving_speed').text(Math.round(e.target.get_moving_speed() * 100) / 100 +'km/h');
    $('#up').text(Math.round(e.target.get_elevation_gain())+'m');
    $('#down').text(Math.round(e.target.get_elevation_loss())+'m');

  }).on('addline', function(e) {
    el.addData(e.line);
  }).addTo(map);
  map.addLayer(service);


});
