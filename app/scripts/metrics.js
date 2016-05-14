function show_metrics(data) {
	console.log(data);
	$('#temp_value').text(data.temp+'°C');
	$('#humid_value').text(data.humd+'%');
	$('#uv_value').text(data.uv);
	$('#ari_pm').text(data.pm2_5 + 'μg/m3');
	$('#air_psi').text(data.psi);
	$('#sunset').text(data.sunset);
	$('#sunrise').text(data.sunrise);
	$('#wind_s').text(data.wind + 'm/s');
}
