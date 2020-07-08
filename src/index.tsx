import React from 'react';
import ReactDOM from "react-dom";
import { Plant } from './Plant';
import './style.css';

const projectName = 'PlantBuddy';
document.title = projectName;

const plants = [new Plant('Tomate', 'Tom', 'Sonnenplatz', 'Sonnenplatz')];

function Grid(props: any) {
  return <section> {plants.map(item => (<Tile name={item.name} species={item.species} location={item.location} plant={item}/>))} </section>; 
}

function Tile(props: any) {
  let locationParagraph = <p className="perfectLocation">{props.location}</p>;

  if (props.plant.location !== props.plant.habitat) {
    locationParagraph = <p className="badLocation">{props.location}</p>;
  }

  return (
    <article>
      <h1>{props.name}</h1>
      <p>{props.species}</p>
      {locationParagraph}
    </article>
    );
}

const body = <Grid />;

ReactDOM.render(
  body,
  document.getElementById('root')
);