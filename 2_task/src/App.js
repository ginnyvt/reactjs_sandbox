import React from 'react';
import './App.css';

import Animal from './Animal/Animal';
import { animals } from './Animal/animals';

function App() {
	const renderedAnimals = animals.map((animal) => {
		// Spread operator, no need to have props.animal anymore
		// return <Animal key={animal.id} {...animal}></Animal>;
		return <Animal key={animal.id} animal={animal}></Animal>;
	});

	return <section className='animal-list'>{renderedAnimals}</section>;
}

export default App;
