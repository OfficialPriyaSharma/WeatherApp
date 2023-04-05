"use strict";

//Weather definition
var Weather = function () {};

Weather.prototype.setDate = function () {
  var d = new Date();
  var n = d.toDateString();
  $("#date").text(n);
};

Weather.prototype.getLocation = function () {
  //get location from ip address
  var res = {
    "city": "Buenos Aires",
    "country": "Argentina",
    "countryCode": "AR",
    "query": "200.61.38.44",
    "regionName": "Buenos Aires F.D.",
    "status": "success"
  };

  if (res.status === "success") {
    document.getElementById("location").value = res.city + ", " + res.countryCode;
    this.location = res.city + ", " + res.countryCode;
    this.currentWeather();
    this.forecast();
  }
};

Weather.prototype.setLocation = function () {
    //set location from input text
    $("#f_locator").on("submit", function (e) {
      e.preventDefault();
      this.location = $("#location").val();
      this.currentWeather();
      this.forecast();
      this.loadAnimation();
    }.bind(this));
  };

  Weather.prototype.getWeatherIcon = function (wId, sunrise, sunset) {
    //get weather icon passing returned ID of openweather API. Optional sunrise and sunset time, to determine if is day or night type icon. Return an object with icon name and icon animation properties.
    if (wId) {
      var icon = {};
      icon.name = "na";
      icon.animation = "wi-scale";

      function between(min, max, group, animation) {
        if (wId >= min && wId < max) {
          icon.name = group ? group : "na";
          icon.animation = animation ? animation : "wi-scale";
        }
      }

      between(200, 300, "thunderstorm", "wi-fade");
    between(300, 400, "showers", "wi-moveY");
    between(500, 600, "rain", "wi-moveY");
    between(600, 700, "snow", "wi-moveY");
    between(700, 800, "na", "wi-fade");
    between(801, 900, "cloudy", "wi-moveX");
    between(900, 1000, "na");
    var cond = {
      200: "storm-showers",
      201: "storm-showers",
      202: "thunderstorm",
      500: "rain-mix",
      501: "rain-mix",
      502: "rain",
      511: "sleet",
      520: "rain-mix",
      521: "rain-mix",
      600: "snow",
      611: "sleet",
      701: "fog",
      741: "fog",
      905: "windy",
      906: "hail"
    };