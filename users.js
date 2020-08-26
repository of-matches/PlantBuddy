var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let openWeatherMapAPIKey = e41b6bef2f0be05514166de5593c3f3e;
  let cityName;
  let contryCode;
  let location = cityName + "," + countryCode;

  let apiCallBlueprint = "api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + openWeatherMapAPIKey;
  
  res.json([
    {
      username: "Leon"
      
    },
    {
  	  username: "Fiona"
    }
  ]);
});

module.exports = router;