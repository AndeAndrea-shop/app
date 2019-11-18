import * as React from "react";
import * as ReactDOM from "react-dom";
import {idk} from "./interface";
import Title from "./Title"
//import Chart from "./Chart"
import Dashboard from "./Dashboard"
import PersistentDrawerLeft from "./PersistentDrawerLeft"

function main() {
	console.log("hello webpack");
	//var title = Title("nothing");
	//var chart = new Chart({rip:321});
	//{chart}
	//var div = (
	//	<Chart name="hello">
	//		hello chart
	//	</Chart>
	//	<Dashboard>
//
	//	</Dashboard>
	//);
	//{chart}
	var div = [
		<PersistentDrawerLeft>

		</PersistentDrawerLeft>,
		<img src="images/1.png"></img>,
		<div></div>
	];
	ReactDOM.render(div, document.getElementById("app"));
	Object.assign(window, {
		React,
		ReactDOM,
		idk,
	//	chart
	});
}

window.onload = main;
