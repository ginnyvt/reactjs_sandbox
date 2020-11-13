import React, { Component } from 'react';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './App.css';

class App extends Component {
	state = {
		likes: 0,
	};

	increaseHandler = () => {
		this.setState({
			likes: this.state.likes + 1,
		});
	};

	decreaseHandler = () => {
		if (this.state.likes == 0) {
			return;
		}
		this.setState({
			likes: this.state.likes - 1,
		});
	};

	resetHandler = () => {
		this.setState({
			likes: 0,
		});
	};

	render() {
		const isEven = this.state.likes % 2 === 0;

		return (
			<>
				<Header />
				<main
					style={{ backgroundColor: isEven ? 'skyblue' : 'lightblue' }}
					className={'myClass' + (isEven ? 'even' : 'odd')}
				>
					<h3>Total likes: {this.state.likes}</h3>
					<button id='increase-btn' onClick={this.increaseHandler}>
						Increase
					</button>
					<button id='decrease-btn' onClick={this.decreaseHandler}>
						Decrease
					</button>
					<button id='reset-btn' onClick={this.resetHandler}>
						Reset
					</button>
				</main>
				<Footer />
			</>
		);
	}
}

export default App;
