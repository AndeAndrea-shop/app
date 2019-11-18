import React, {Component} from 'react';
import Swipe from 'react-easy-swipe';

export default class TestEasySwipe extends Component {
	constructor(props) {
		super(props);
		this.state = {
			msg: `Not moved yet`
		};
		this.onSwipeStart = this.onSwipeStart.bind(this);
		this.onSwipeMove = this.onSwipeMove.bind(this);
		this.onSwipedLeft = this.onSwipedLeft.bind(this);
	}

	onSwipeStart(event) {
		this.setState({
			msg: `Start swiping ${event}`
		});
	}

	onSwipeMove(event) {
		this.setState({
			msg: `Moved ${event}`
		});
	}

	onSwipedLeft(event) {
		this.setState({
			msg: `Swiped left ${event}`
		});
	}

	onSwipeEnd(event) {
		console.log('End swiping...', event);
	}

	render() {
		const boxStyle = {
			width: '100%',
			height: '300px',
			border: '1px solid black',
			background: '#ccc',
			padding: '20px',
			fontSize: '3em'
		};
		return (
			<Swipe
				onSwipeStart={this.onSwipeStart}
				onSwipeMove={this.onSwipeMove}
				onSwipeEnd={this.onSwipeEnd}>
				<div style={boxStyle}>Open the console and swipe me {this.state.msg}</div>
			</Swipe>
		);
	}
}
