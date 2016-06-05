function fetchData(callback, fromDatetime, toDatetime) {
  var data = {};
  if(fromDatetime && toDatetime){
    data.start = fromDatetime;
    data.end = toDatetime;
  }
  // var url = 'http://localhost:5000/';
  var url = 'http://140.121.101.164:5000/';
  var jqxhr = $.getJSON(url,data)
    .done(function(json) {
      console.log(json)
      callback(json);
    })
    .fail(function(jqxhr, textStatus, error) {
      var err = textStatus + ', ' + error;
      console.log('Request Failed: ' + err);
    })
}
