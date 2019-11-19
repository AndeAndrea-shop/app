import * as React from "react";
import * as ReactDOM from "react-dom";
//import {idk} from "./interface";
//import Title from "./Title"
//import Chart from "./Chart"
//import Dashboard from "./Dashboard"
//import PersistentDrawerLeft from "./PersistentDrawerLeft"
import Carousel from "./components/carousel"

// swipe tests
//import TestReactSwipe from "./components/TestReactSwipe"
import TestReactSwipeable from "./components/TestReactSwipeable"
import TestReactEasySwipe from "./components/TestReactEasySwipe"

function main() {
	console.log("hello webpack");
	var div = [
		//<PersistentDrawerLeft>
		//</PersistentDrawerLeft>,
		<TestReactEasySwipe></TestReactEasySwipe>,
		<Carousel animation="slide">
			<img src="images/1.png" width="640" height="480"></img>
			<img src="images/women.png" width="640" height="480"></img>
			<img src="images/men.png" width="640" height="480"></img>
		</Carousel>,
		<div></div>,
		<TestReactSwipeable>
			
		</TestReactSwipeable>
	];
	ReactDOM.render(div, document.getElementById("app"));
	Object.assign(window, {
		React,
		ReactDOM
	});
}

window.onload = main;
