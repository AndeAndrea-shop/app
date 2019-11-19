import React, {Component} from 'react';
import Swipe from 'react-easy-swipe';

function stringifyPosition

export default class TestEasySwipe extends Component {
	constructor(props) {
		super(props);
		this.state = {
			msg: "Not moved yet"
		};
		this.onSwipeStart = this.onSwipeStart.bind(this);
		this.onSwipeEnd = this.onSwipeEnd.bind(this);
		this.onSwipeMove = this.onSwipeMove.bind(this);
		this.onSwipeLeft = this.onSwipeLeft.bind(this);
		this.onSwipeRight = this.onSwipeRight.bind(this);
	}

	onSwipeStart(event) {
		this.setState({
			msg: "onSwipeStart"
		});
		console.log("onSwipeEnd", event);
	}

	onSwipeEnd(event) {
		this.setState({
			msg: "onSwipeEnd"
		});
		console.log("onSwipeEnd", event);
	}

	onSwipeMove(position, event) {
		this.setState({
			msg: "onSwipeMove x=" + position.x.toFixed(2) + " y=" + position.y.toFixed(2)
		});
		console.log("onSwipeMove", event);
	}

	onSwipeLeft(event) {
		this.setState({
			msg: "onSwipeLeft"
		});
		console.log("onSwipeLeft", event);
	}

	onSwipeRight(event) {
		this.setState({
			msg: "onSwipeRight"
		});
		console.log("onSwipeRight", event);
	}

	render() {
		return (
			<Swipe
				onSwipeStart={this.onSwipeStart}
				onSwipeEnd={this.onSwipeEnd}
				onSwipeMove={this.onSwipeMove}
				onSwipeLeft={this.onSwipeLeft}
				onSwipeRight={this.onSwipeRight}
			>
				<div>TestReactEasySwipe</div>
				<div>{this.state.msg}</div>
			</Swipe>
		);
	}
}
