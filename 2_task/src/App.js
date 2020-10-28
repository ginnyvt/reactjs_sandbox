import React from 'react';
import './App.css';
import Animal from './Animal/Animal';

const animalOne = {
	img:
		'https://res.cloudinary.com/rebelwalls/image/upload/b_black,c_fill,f_auto,fl_progressive,h_533,q_auto,w_800/v1540989418/article/R11101_image1',
	name: 'lion',
};

const animalTwo = {
	img: 'https://news.gsu.edu/files/2019/10/monkey-800x600.jpg',
	name: 'monkey',
};

const animalThree = {
	img:
		'https://images.newscientist.com/wp-content/uploads/2020/03/31210900/b8kk6g_web.jpg',
	name: 'dophin',
};

const animalFour = {
	img:
		'https://media.npr.org/assets/img/2019/11/15/giant-panda-bei-bei-20180608-051skipbrown-_wide-5621060ac353db3650a31d9b8cb078bbbfccd9e5-s800-c85.png',
	name: 'panda',
};
function App() {
	return (
		<section className='animal-list'>
			<Animal img={animalOne.img} name={animalOne.name}></Animal>

			<Animal img={animalTwo.img} name={animalTwo.name}></Animal>

			<Animal img={animalThree.img} name={animalThree.name}></Animal>

			<Animal img={animalFour.img} name={animalFour.name}></Animal>
		</section>
	);
}

export default App;
