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