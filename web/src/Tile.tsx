import React from 'react';



function Tile(props: any) {
	return (
		<article className={props.styleTemplate}>
			<h2>{props.title}</h2>
			{ props.paragraphs.map((paragraph: any) => <p> {paragraph[0]}: {paragraph[1]} </p>)}
		</article>
	);
}

export default Tile;