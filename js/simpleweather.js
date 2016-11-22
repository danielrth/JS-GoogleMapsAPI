function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'f',
    success: function(weather) {
      html = '<b> '+weather.temp+'&deg;'+weather.units.temp+'</b> <i>'+weather.currently+'</i> | ';
      html += ''+weather.city+', '+weather.region+'';
/*      html += ' | '+weather.alt.temp+'&deg;C';  */
      
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}

$(document).ready(function() {
  navigator.geolocation.getCurrentPosition(function(position) {
    loadWeather(position.coords.latitude+','+position.coords.longitude); 
  });
});
