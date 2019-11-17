import React = require("react");
import ReactDOM = require("react-dom");
import {idk} from "./interface";

//var hai = <h1>haiii</h1>;

function main() {
	Object.assign(window, {
		React,
		ReactDOM,
		idk
	});
	//console.log("haiii", React);
	//console.log("haiii", idk);
	console.log("hello webpack");
	ReactDOM.render(idk, document.getElementById("app"));
}

window.onload = main;
