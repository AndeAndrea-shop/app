import React, {Component} from 'react';
import { Swipeable } from 'react-swipeable';
 
export default class TestReactSwipeable extends Component {
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
		return (
			<Swipeable
				onSwiping={this.onSwipeStart}
				onSwiped={this.onSwipeStart}
				onSwipedLeft={this.onSwipedLeft}
			>
				<div>Open the console and swipe me {this.state.msg}</div>
			</Swipeable>
		);
	}
}
