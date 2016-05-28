function show_metrics(data,dataTime) {
  console.log(data);

  var sunset = moment(data.sunset, 'HH:mm:ss');
  var sunrise = moment(data.sunrise, 'HH:mm:ss');

  $('#temp_value').text(data.temp + '°C');
  $('#humid_value').text(data.humd + '%');
  $('#uv_value').text(Math.round(data.uv));
  $('#ari_pm').text(data.pm2_5 + 'μg/m3');
  $('#air_psi').text(data.psi);
  $('#sunset').text(sunset.format('HH:mm'));
  $('#data_time').text(moment(dataTime).format('HH:mm'));
  $('#from_now').text(moment(dataTime).fromNow());
  $('#sunset_dis').text(sunset.fromNow());
  $('#sunrise').text(sunrise.format('HH:mm'));
  $('#sunrise_dis').text(sunrise.fromNow());
  $('#wind_s').text(data.wind + 'm/s');

  //  + moment(data.sunset,'HH:mm:ss').fromNow()
}
