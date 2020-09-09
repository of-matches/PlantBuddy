import React from 'react';
import Tile from './Tile';
import './App.css';

function App() {
  	return (
		<main>
			<WeatherHistory />
    		<PlantGrid />
		</main>
  	);
}

class WeatherHistory extends React.Component {
	state = {weatherData: null}

	render() {
		console.log(this.state.weatherData);

		return (
			<section>
				<h1>Weather History</h1>
				<p> {this.state.weatherData} </p>
			</section>
		);
	}

	componentDidMount() {
		fetch('/weatherHistory')
      	.then(res => res.json())
		.then(weatherData => {
			console.log(weatherData);
			this.setState({ weatherData });
		});

		  
		this.render();
	}
}

class PlantGrid extends React.Component {
	state = {plants: []}

	render() {
		return (
			<section className="grid">
				<h1>My Plants</h1>
				{ this.state.plants.map(plant => (
					<Tile 
						title={plant['name']}
						styleTemplate='plantTile' 
						paragraphs={[
							[ 'Preferred Sunlight', plant['preferred_insolation'] ], 
							[ 'Preferred Wetness', plant['preferred_wetness'] ]
						]} 
					/>
				))}
			</section>
		);
	}

	componentDidMount() {
		this.fetchPlantsFromDatabase();
		this.render();
	}

	fetchPlantsFromDatabase() {
		fetch('/plants')
      	.then(res => res.json())
      	.then(plants => this.setState({ plants }));
	}
}

export default App;