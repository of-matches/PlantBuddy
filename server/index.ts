const express = require('express');
const nodeFetch = require('node-fetch');
const {Pool, Client} = require('pg');

const app = express();
const port = 3001;
const client = new Client({
	user: 'plantbuddy_server',
	host: 'localhost',
	database: 'plantbuddy',
	password: 'plantbuddy',
	port: 5433,
});

client.connect();

app.get('/weatherHistory', (req: any, res: any) => {
	const dayInMilliseconds: number = 86400;
    let openWeatherMapAPIKey = "e41b6bef2f0be05514166de5593c3f3e";
	let latitude = 49.87167;
	let longitude = 8.65027;
	let timestampInSeconds = Math.floor(Date.now() / 1000);
	let weatherData = new Array();
	let tempData;

    let apiCallStringTemplate = 'https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=' + latitude + '&lon=' + longitude;
	let apiCallString;

	for(let i = 0; i < 5; i++) {
		apiCallString = apiCallStringTemplate + '&dt=' + timestampInSeconds + '&appid=' + openWeatherMapAPIKey;

		nodeFetch(apiCallString)
		.then((response: any) => response.json())
		.then((data: any) => {
			res.write(JSON.stringify(data));
		})
		.catch((error: any) => { console.error('Error:', error); });
		
		timestampInSeconds -= dayInMilliseconds;
	}

	res.end();
});

app.get('/plants', (req: any, res: any) => {
	client
  		.query('SELECT * FROM plants')
  		.then((queryResult: any) => res.send(queryResult.rows))
  		.catch((error: any) => console.error(error.stack))
});

app.listen(port, () => { console.log(`Server listening at http://localhost:${port}`); });