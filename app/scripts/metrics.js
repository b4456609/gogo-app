function show_metrics(data,dataTime) {
  console.log(data);

  var sunset = moment(data.sunset, 'HH:mm:ss');
  var sunrise = moment(data.sunrise, 'HH:mm:ss');

  $('#temp_value').text(data.temp + '°C');
  $('#humid_value').text(data.humd + '%');
  $('#uv_value').html(uvDisplay(Math.round(data.uv)));
  $('#ari_pm').html(pm25Display(data.pm2_5));
  $('#air_psi').html(psiDisplay(data.psi));
  $('#sunset').text(sunset.format('HH:mm'));
  $('#data_time').text(moment(dataTime).format('HH:mm'));
  $('#from_now').text(moment(dataTime).fromNow());
  $('#sunset_dis').text(sunset.fromNow());
  $('#sunrise').text(sunrise.format('HH:mm'));
  $('#sunrise_dis').text(sunrise.fromNow());
  $('#wind_s').html(windDisplay(data.wind));

  //  + moment(data.sunset,'HH:mm:ss').fromNow()
}

function windDisplay(wind) {
  if(wind < 0.3){
    return '<p><i class="wi wi-wind-beaufort-0"></i></p><small>'+wind+'m/s</small>';
  }
  else if(wind <= 1.5){
    return '<p><i class="wi wi-wind-beaufort-1"></i></p><small>'+wind+'m/s</small>';
  }
  else if(wind <= 3.3){
    return '<p><i class="wi wi-wind-beaufort-2"></i></p><small>'+wind+'m/s</small>';
  }
  else if(wind <= 5.5){
    return '<p><i class="wi wi-wind-beaufort-3"></i></p><small>'+wind+'m/s</small>';
  }
  else if(wind <= 7.9){
    return '<p><i class="wi wi-wind-beaufort-4"></i></p><small>'+wind+'m/s</small>';
  }
  else if(wind <= 10.4){
    return '<p><i class="wi wi-wind-beaufort-5"></i></p><small>'+wind+'m/s</small>';
  }
  else if(wind <= 13.8){
    return '<p><i class="wi wi-wind-beaufort-6"></i></p><small>'+wind+'m/s</small>';
  }
  else if(wind <= 17.1){
    return '<p><i class="wi wi-wind-beaufort-7"></i></p><small>'+wind+'m/s</small>';
  }
  else if(wind <= 20.7){
    return '<p><i class="wi wi-wind-beaufort-8"></i></p><small>'+wind+'m/s</small>';
  }
  else if(wind <= 24.4){
    return '<p><i class="wi wi-wind-beaufort-9"></i></p><small>'+wind+'m/s</small>';
  }
  else if(wind <= 28.4){
    return '<p><i class="wi wi-wind-beaufort-10"></i></p><small>'+wind+'m/s</small>';
  }
  else if(wind <= 32.6){
    return '<p><i class="wi wi-wind-beaufort-11"></i></p><small>'+wind+'m/s</small>';
  }
  else{
    return '<p><i class="wi wi-wind-beaufort-12"></i></p><small>'+wind+'m/s</small>';    
  }
}

function uvDisplay(uv) {
  if(uv < 2){
    return '<p><i class="wi wi-day-sunny" style="color:green"></i></p><small>'+uv+'</small>';
  }
  else if(uv < 5){
    return '<p><i class="wi wi-day-sunny" style="color:yellow"></i></p><small>'+uv+'</small>';
  }
  else if(uv < 7){
    return '<p><i class="wi wi-day-sunny" style="color:orange"></i></p><small>'+uv+'</small>';
  }
  else if(uv < 10){
    return '<p><i class="wi wi-day-sunny" style="color:red"></i></p><small>'+uv+'</small>';
  }
  else{
    return '<p><i class="wi wi-day-sunny" style="color:purple"></i></p><small>'+uv+'</small>';    
  }
}

function pm25Display(pm) {
  if(pm <= 35){
    return '<p>良好</p><small>'+pm+'μg/m3</small>';
  }
  else if(pm <= 53){
    return '<p>普通</p><small>'+pm+'μg/m3</small>';
  }
  else if(pm <= 70){
    return '<p>不良</p><small>'+pm+'μg/m3</small>';
  }
  else{
    return '<p>非常不良</p><small>'+pm+'μg/m3</small>';    
  }
}

function psiDisplay(psi) {
  if(psi <= 50){
    return '<p>良好</p><small>'+psi+'</small>';
  }
  else if(psi <= 100){
    return '<p>普通</p><small>'+psi+'</small>';
  }
  else if(psi <= 199){
    return '<p>不良</p><small>'+psi+'</small>';
  }
  else if(psi <= 299){
    return '<p>非常不良</p><small>'+psi+'</small>';
  }
  else{
    return '<p>有害</p><small>'+psi+'</small>';    
  }
}