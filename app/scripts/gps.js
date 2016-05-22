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
  }).on('addline', function(e) {
    el.addData(e.line);
  }).addTo(map);
  map.addLayer(service);


});
