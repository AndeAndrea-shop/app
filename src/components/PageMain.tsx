import React from "react";
import Carousel from "./carousel";
import { setAppPage, setAppComponent } from "./App";
import PageWomen from "./PageWomen";
import PageMen from "./PageMen";
import PageAccessories from "./PageAccessories";

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
