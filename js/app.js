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