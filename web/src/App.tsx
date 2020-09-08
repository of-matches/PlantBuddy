import React from 'react';
import './App.css';

function App() {
  	return (
    	<Grid />
  	);
}

class Grid extends React.Component {
	state = {plants: []}

	render() {
		return (
			<section className="grid">
				{ this.state.plants.map(plant => (<Tile name={plant['name']} preferredInsolation={plant['preferred_insolation']} preferredWetness={plant['preferred_wetness']} />)) }
			</section>
		);
	}

	componentDidMount() {
		this.fetchArticles();
		this.render();
	}

	fetchArticles() {
		fetch('/plants')
      	.then(res => res.json())
      	.then(plants => this.setState({ plants }));
	}
}

function Tile(props: any) {
	return (
		<article>
			<h2> {props.name} </h2>
			<p> Preferred Insolation: {props.preferredInsolation} </p>
			<p> Preferred Wetness: {props.preferredWetness} </p>
		</article>
	);
}

export default App;