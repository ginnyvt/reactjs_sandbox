import './App.css';
import React, { Component } from 'react';

class App extends Component {
	state = {
		likes: 0,
	};

	increase = () => {
		this.setState({
			likes: this.state.likes + 1,
		});
	};

	decrease = () => {
		if (this.state.likes == 0) {
			return;
		}
		this.setState({
			likes: this.state.likes - 1,
		});
	};

	reset = () => {
		this.setState({
			likes: 0,
		});
	};

	getClasses = (e) => {};

	render() {
		const isEven = this.state.likes % 2 === 0;
		return (
			<div
				style={{ backgroundColor: isEven ? 'red' : 'yellow' }}
				className={'myClass' + (isEven ? 'even' : 'odd')}
			>
				<p>Total likes: {this.state.likes}</p>
				<button id='increase-btn' onClick={this.increase}>
					Increase
				</button>
				<button id='decrease-btn' onClick={this.decrease}>
					Decrease
				</button>
				<button id='reset-btn' onClick={this.reset}>
					Reset
				</button>
			</div>
		);
	}
}

export default App;
