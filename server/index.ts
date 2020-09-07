const express = require('express');
const nodeFetch = require('node-fetch');

const app = express();
const port = 3001;

app.get('/currentWeather', (req: any, res: any) => {
	const dayInMilliseconds: number = 1;
    let openWeatherMapAPIKey = "e41b6bef2f0be05514166de5593c3f3e";
	let latitude = 49.87167;
	let longitude = 8.65027;
	let timestampNow = Date.now();
	let weatherData = new Array();
	let dataSet;

    let apiCallStringOutline = 'https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=' + latitude + '&lon=' + longitude;
	let apiCallString;

	for(let i = 0; i < 5; i++) {
		timestampNow -= dayInMilliseconds;
		apiCallString = apiCallStringOutline + '&dt=' + timestampNow + '&appid=' + openWeatherMapAPIKey;

		nodeFetch(apiCallString)
		.then((response: any) => response.json())
		.then((data: any) => {
			dataSet = JSON.parse(data);
			let relevantData = {temperature: 20, precipitation: 30}
			weatherData[i] = relevantData;
		})
		.catch((error: any) => { console.error('Error:', error); });
	}
});

app.listen(port, () => { console.log(`Server listening at http://localhost:${port}`); });