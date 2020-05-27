import React from 'react';
import ReactDOM from "react-dom";

const projectName = 'PlantBuddy';
const plants = ['Tomate', 'Stachelbeere', 'Paprika', 'Erbse', 'Erdbeere'];

document.title = projectName;

function Grid(props) {
  return <section class="grid"> {plants.map(item => (<Tile name={item}/>))} </section>; 
}

function Tile(props) {
  return (
    <article class="tile">
      <h1>{props.name}</h1>
      <p>Schattenplatz</p>
    </article>
    );
}

const body = <Grid />;

ReactDOM.render(
  body,
  document.getElementById('root')
);