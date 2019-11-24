import React from "react";
import Carousel from "./Carousel";
import { setAppComponent } from "./App";
import PageWomen from "./PageWomen";
import PageMen from "./PageMen";
import PageAccessories from "./PageAccessories";
import TestParallaxSlide from "./TestParallaxSlide";
import { TestSwipableViews } from "./TestSwipeableViews";

export default class PageMain extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <>
			<Carousel animation="slide">
				<img src="images/carousel_1.png"></img>
				<img src="images/carousel_2.png"></img>
			</Carousel>

			{/*<TestParallaxSlide style="width: 40%"></TestParallaxSlide>*/}
			<TestSwipableViews className="Carousel">
				<div className="CarouselItem">
					<img src="images/carousel_1.png"></img>
				</div>
				<div className="CarouselItem">
					<img src="images/carousel_2.png"></img>
				</div>
			</TestSwipableViews>

			<div className="frontPageLink">
				<a onClick={setAppComponent.bind(this, <PageWomen/>)}>
					<img src="images/women.png"></img>
				</a>
			</div>

			<div className="frontPageLink">
				<a onClick={setAppComponent.bind(this, <PageMen/>)}>
					<img src="images/men.png"></img>
				</a>
			</div>

			<div className="frontPageLink">
				<a onClick={setAppComponent.bind(this, <PageAccessories/>)}>
					<img src="images/accessories.png"></img>
				</a>
			</div>
		</>
	}
}
