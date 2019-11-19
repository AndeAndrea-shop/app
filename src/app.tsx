import * as React from "react";
import * as ReactDOM from "react-dom";
//import {idk} from "./interface";
//import Title from "./Title"
//import Chart from "./Chart"
//import Dashboard from "./Dashboard"
import PersistentDrawerLeft from "./PersistentDrawerLeft"
import Carousel from "./components/carousel"

// swipe tests
//import TestReactSwipe from "./components/TestReactSwipe"
import TestReactSwipeable from "./components/TestReactSwipeable"
import TestReactEasySwipe from "./components/TestReactEasySwipe"
import DebugWindow from "./components/DebugWindow";
import "./style/app.scss";

function main() {
	/*
			<TestReactEasySwipe></TestReactEasySwipe>

			<PersistentDrawerLeft></PersistentDrawerLeft>

			<TestReactSwipeable>
			</TestReactSwipeable>
			<DebugWindow></DebugWindow>
	*/
	var div = <>
		<div className="content">
			<Carousel animation="slide">
				<img src="images/carousel_1.png"></img>
				<img src="images/carousel_2.png"></img>
			</Carousel>

			<div className="frontPageLink">
				<a href="javascript:console.log('women');">
					<img src="images/women.png"></img>
				</a>
			</div>

			<div className="frontPageLink">
				<a href="javascript:console.log('men');">
					<img src="images/men.png"></img>
				</a>
			</div>

			<div className="frontPageLink">
				<a href="javascript:console.log('accessories');">
					<img src="images/accessories.png"></img>
				</a>
			</div>
		</div>
	</>
	ReactDOM.render(div, document.getElementById("app"));
	Object.assign(window, {
		React,
		ReactDOM
	});
}

window.onload = main;
