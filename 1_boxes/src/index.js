import React from 'react';
import ReacDom from 'react-dom';

import './index.css';

const Boxes = () => {
	return (
		<section className='box-list'>
			<Box name='John' title='Designer' age='27'></Box>
			<Box name='Peter' title='Developer' age='32'></Box>
			<Box name='Anna' title='Team Leader' age='30'></Box>
		</section>
	);
};

const Box = (props) => {
	return (
		<article className='box'>
			<h1>{props.name}</h1>
			<p>Title: {props.title}</p>
			<p>Age: {props.age}</p>
		</article>
	);
};

ReacDom.render(<Boxes />, document.getElementById('root'));
