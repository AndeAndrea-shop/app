import * as React from "react";
import * as ReactDOM from "react-dom";
import {idk} from "./interface";
import Title from "./Title"

function main() {
	console.log("hello webpack");
	var title = Title("nothing");
	ReactDOM.render(title, document.getElementById("app"));
	Object.assign(window, {
		React,
		ReactDOM,
		idk
	});
}

window.onload = main;
