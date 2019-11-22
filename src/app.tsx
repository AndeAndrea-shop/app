import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./components/App";
//import {idk} from "./interface";
//import Title from "./Title"
//import Chart from "./Chart"
//import Dashboard from "./Dashboard"
//import TestReactSwipeable from "../components/TestReactSwipeable"
//import TestReactEasySwipe from "../components/TestReactEasySwipe"
//import DebugWindow from "../components/DebugWindow";

function main() {
	/*
			<TestReactEasySwipe></TestReactEasySwipe>
			<TestReactSwipeable>
			</TestReactSwipeable>
			<DebugWindow></DebugWindow>
	*/
	var app = <App/>
	var div = <>
		<div className="content">
			{app}
		</div>
	</>
	var logo = document.getElementById("logo");
	if (logo)
		logo.style.display = "none";
	ReactDOM.render(div, document.getElementById("app"));
	Object.assign(window, {
		React,
		ReactDOM,
		logo,
		//app
	});
}

window.onload = main;
