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
import { Divider } from "@material-ui/core";
import PageMain from "./components/PageMain";
import PageAccessories from "./components/PageAccessories";
import PageMen from "./components/PageMen";
import PageWomen from "./components/PageWomen";
import PageMemberDiscount from "./components/PageMemberDiscount";
import PageMyOrders from "./components/PageMyOrders";
import PagePress from "./components/PagePress";
import PageAddress from "./components/PageAddress";

export function setAppPage(which: string) {
	var app = App.instance;
	app.changePage(which);
}

export class App extends React.Component {
	static instance: App;

	constructor(props) {
		super(props);
		App.instance = this;
		this.state = {
			page: "main"
		}
	}

	changePage(which) {
		console.log("changePage", which);
		this.setState({page: which});
	}

	render() {
		var pageComponent = <h1>switch-default</h1>

		switch (this.state.page) {
			case "accessories":
				pageComponent = <PageAccessories/>;
				break;
			case "address":
				pageComponent = <PageAddress/>;
				break;
			case "main":
				pageComponent = <PageMain/>;
				break;
			case "memberdiscount":
				pageComponent = <PageMemberDiscount/>;
				break;
			case "men":
				pageComponent = <PageMen/>;
				break;
			case "myorders":
				pageComponent = <PageMyOrders/>;
				break;
			case "press":
				pageComponent = <PagePress/>;
				break;
			case "women":
				pageComponent = <PageWomen/>;
				break;
		}

		return (
			<PersistentDrawerLeft>
				{pageComponent}
				<div className="invertedLineParent">
					<div className="invertedLine"></div>
				</div>
			</PersistentDrawerLeft>
		)
	}
}

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
