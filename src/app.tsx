import * as React from "react";
import * as ReactDOM from "react-dom";
import {idk} from "./interface";

function main() {
	//console.log("haiii", React);
	//console.log("haiii", idk);
	console.log("hello webpack");
	ReactDOM.render(idk, document.getElementById("app"));

	
	Object.assign(window, {
		React,
		ReactDOM,
		idk
	});
}

window.onload = main;
