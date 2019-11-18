import * as React from "react";
import * as ReactDOM from "react-dom";
import {idk} from "./interface";
import Title from "./Title"
//import Chart from "./Chart"
import Dashboard from "./Dashboard"

function main() {
	console.log("hello webpack");
	//var title = Title("nothing");
	//var chart = new Chart({rip:321});
	//{chart}
	//var div = (
	//	<Chart name="hello">
	//		hello chart
	//	</Chart>
	//);
	//{chart}
	var div = (
		<Dashboard>
			
		</Dashboard>
	);
	ReactDOM.render(div, document.getElementById("app"));
	Object.assign(window, {
		React,
		ReactDOM,
		idk,
	//	chart
	});
}

window.onload = main;
