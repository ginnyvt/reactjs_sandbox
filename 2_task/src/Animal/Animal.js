import React from 'react';

const Animal = (props) => {
	const showAlert = () => {
		alert(`Hello, I am ${props.name}. It is nice to meeet you!`);
	};

	return (
		<article className='animal'>
			<div className='img-container'>
				<img src={props.img} alt={props.name} />
			</div>
			<p>{props.name}</p>
			<button type='button' className='btn' onClick={showAlert}>
				Click Me
			</button>
		</article>
	);
};

export default Animal;
