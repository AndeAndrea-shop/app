import React from "react";
import Carousel from "./carousel";
import { setAppPage } from "./App";

export default class PageMain extends React.Component {
	constructor(props) {
		super(props);
	}

	changePage(which) {
		setAppPage(which);
		//console.log("clickLink", which);
	}

	render() {
		return <>
			<Carousel animation="slide">
				<img src="images/carousel_1.png"></img>
				<img src="images/carousel_2.png"></img>
			</Carousel>

			<div className="frontPageLink">
				<a onClick={this.changePage.bind(this, "women")}>
					<img src="images/women.png"></img>
				</a>
			</div>

			<div className="frontPageLink">
				<a onClick={this.changePage.bind(this, "men")}>
					<img src="images/men.png"></img>
				</a>
			</div>

			<div className="frontPageLink">
				<a onClick={this.changePage.bind(this, "accessories")}>
					<img src="images/accessories.png"></img>
				</a>
			</div>
		</>
	}
}
