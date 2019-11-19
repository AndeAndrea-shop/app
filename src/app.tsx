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
	<PersistentDrawerLeft></PersistentDrawerLeft>
	*/
	var div = <>
		<div className="content">
			<TestReactEasySwipe></TestReactEasySwipe>
			<Carousel animation="slide">
				<img src="images/1.png"></img>
				<img src="images/women.png"></img>
				<img src="images/men.png"></img>
			</Carousel>
			<TestReactSwipeable>
			</TestReactSwipeable>
			<DebugWindow></DebugWindow>
		</div>
	</>
	ReactDOM.render(div, document.getElementById("app"));
	Object.assign(window, {
		React,
		ReactDOM
	});
}

window.onload = main;
