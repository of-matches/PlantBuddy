const express = require('express');
const nodeFetch = require('node-fetch');

const app = express();
const port = 3001;

app.get('/currentWeather', (req: any, res: any) => {
    let openWeatherMapAPIKey = "e41b6bef2f0be05514166de5593c3f3e";
    let cityName = "Darmstadt";
    let countryCode = "DE";
    let location = cityName + "," + countryCode;

    let apiCallBlueprint = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + openWeatherMapAPIKey;
	
	nodeFetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=" + openWeatherMapAPIKey)
	.then((response: any) => response.json())
	.then((data: any) => res.json(data)); 

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})