import * as React from 'react';
import {Fade, Slide, IconButton} from '@material-ui/core';
//import autoBind from 'auto-bind';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import '../style/Carousel.scss';

export interface CarouselProps {
	autoPlay?: boolean;
	interval?: number;
	indicators?: boolean;
	animation?: "slide" | "face";
}

export interface CarouselState {
	active: number;
	autoPlay: boolean;
	interval: number;
}

export default class Carousel extends React.Component<CarouselProps, CarouselState> {
	constructor(props) {
		super(props);
		this.state = {
			active: 0,
			autoPlay: !!this.props.autoPlay,
			interval: this.props.interval !== undefined ? this.props.interval : 4000
		};
		this.timer = null;
		//autoBind(this);
		this.prev = this.prev.bind(this);
		this.next = this.next.bind(this);
		this.reset = this.reset.bind(this);
		this.start = this.start.bind(this);
		this.stop = this.stop.bind(this);
		this.pressIndicator = this.pressIndicator.bind(this);
	}

	componentDidMount() {
		this.start();
	}

	componentWillUnmount() {
		this.stop();
	}

	static getDerivedStateFromProps(nextProps: CarouselProps, prevState: CarouselState) {
		//console.log("getDerivedStateFromProps");
		//console.log("nextProps", nextProps);
		//console.log("prevState", prevState);
		if (nextProps.autoPlay !== prevState.autoPlay || nextProps.interval !== prevState.interval) {
			prevState.autoPlay = !!nextProps.autoPlay;
			prevState.interval = nextProps.interval !== undefined ? nextProps.interval : 4000;
			return prevState;
		} else {
			return null;
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.autoPlay !== prevState.autoPlay || prevProps.interval !== prevState.interval) {
			this.reset();
		}
	}

	stop() {
		if (this.timer) {
			clearInterval(this.timer);
			this.timer = null;
		}
	}

	start() {
		if (this.state.autoPlay) {
			this.timer = setInterval(this.next, this.state.interval);
		}
	}

	reset() {
		this.stop();
		if (this.state.autoPlay) {
			this.start();
		}
	}

	pressIndicator(index) {
		//console.log("index", index);
		this.setState({
			active: index
		}, this.reset);
	}

	next(event) {
		const next = this.state.active + 1 > this.props.children.length - 1 ? 0 : this.state.active + 1;
		this.setState({
			active: next
		}, this.reset);
		if (event)
			event.stopPropagation();
	}

	prev(event) {
		const prev = this.state.active - 1 < 0 ? this.props.children.length - 1 : this.state.active - 1;
		this.setState({
			active: prev
		}, this.reset);
		if (event) {
			event.stopPropagation();
		}
	}

	render() {
		const indicators = this.props.indicators !== undefined ? this.props.indicators: true;
		const animation = this.props.animation !== undefined ? this.props.animation: "fade"

		return (
			<div className={`Carousel ${this.props.className ? this.props.className : ""}`} onMouseEnter={this.stop} onMouseOut={this.reset}>
				{
					Array.isArray(this.props.children) ? 
						this.props.children.map( (child, index) => {
							return (
								<CarouselItem key={index} active={index === this.state.active ? true : false} child={child} animation={animation}/>
							)
						})
						:
						<CarouselItem key={0} active={true} child={this.props.children}/>
				}
				
				<div className="Next ButtonWrapper">
					<IconButton className="Next Button mui--align-middle" onClick={this.next}>
						<NavigateNextIcon/>
					</IconButton>
				</div>

				<div className="Prev ButtonWrapper">
					<IconButton className="Prev Button mui--align-middle" onClick={this.prev}>
						<NavigateBeforeIcon/>
					</IconButton>
				</div>
				
				{indicators ? <Indicators carousel={this} length={this.props.children.length} active={this.state.active} press={this.pressIndicator}/> : null}
			</div>
		)
	}
}

function CarouselItem(props) {
	return (
		// props.active ? 
		// (
			<div className="CarouselItem" hidden={!props.active}>
				{props.animation === "slide" ?
					<Slide direction="left" in={props.active} timeout={200}>
						<div>
							{props.child}
						</div>
					</Slide>
					:
					<Fade in={props.active} timeout={500}>
						<div>
							{props.child}
						</div>
					</Fade>
				}
			</div>
		// ) : null
	)
}

interface IndicatorsProps {
	carousel: Carousel;
	length: number;
	active: number;
	press: CallableFunction
}

interface IndicatorsState {
	// nothing yet
}

class Indicators extends React.Component<IndicatorsProps, IndicatorsState> {
	constructor(props) {
		super(props);
		//this.onClick = this.onClick.bind(this);
	}

	onClick(i) {
		//console.log("this", this, "i", i);
		var carousel: Carousel = this.props.carousel;
		carousel.pressIndicator(i);
	}

	render() {
		var props = this.props;
		//console.log("Indicators(props)", this.props);
		let indicators = [];
		for (var i=0; i<props.length; i++) {
			const className = i === props.active ? "Active Indicator" : "Indicator";
			//const item = <FiberManualRecordIcon key={i} size='small' className={className} onClick={() => {props.press(i)}}/>;
			const item = <FiberManualRecordIcon key={i} className={className} onClick={this.onClick.bind(this, i)}/>;
			indicators.push(item);
		}
		return (
			<div className="Indicators">
				{indicators}
			</div>
		)
	}
}
