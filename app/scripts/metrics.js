function show_metrics(data) {
  console.log(data);

  moment.locale('zh-tw');
  var sunset = moment(data.sunset, 'HH:mm:ss');
  var sunrise = moment(data.sunrise, 'HH:mm:ss');

  $('#temp_value').text(data.temp + '°C');
  $('#humid_value').text(data.humd + '%');
  $('#uv_value').text(data.uv);
  $('#ari_pm').text(data.pm2_5 + 'μg/m3');
  $('#air_psi').text(data.psi);
  $('#sunset').text(sunset.format('HH:mm'));
  $('#sunset_dis').text(sunset.fromNow());
  $('#sunrise').text(sunrise.format('HH:mm'));
  $('#sunrise_dis').text(sunrise.fromNow());
  $('#wind_s').text(data.wind + 'm/s');

  //  + moment(data.sunset,'HH:mm:ss').fromNow()
}
