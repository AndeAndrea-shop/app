import React, { ReactInstance, ComponentElement, ComponentType, ReactComponentElement } from "react";
import PersistentDrawerLeft from "../PersistentDrawerLeft"
import PageMain from "../components/PageMain";
import PageAccessories from "../components/PageAccessories";
import PageMen from "../components/PageMen";
import PageWomen from "../components/PageWomen";
import PageMemberDiscount from "../components/PageMemberDiscount";
import PageMyOrders from "../components/PageMyOrders";
import PagePress from "../components/PagePress";
import PageAddress from "../components/PageAddress";
import "../style/app.scss";
import PageProfile from "./PageProfile";
import PageMore from "./PageMore";

//export function setAppComponent(component: React.Component) {
export function setAppComponent(component: any) {
	var app = App.instance;
	app.changeComponent(component);
}

interface AppProps {
	nothing?: "yet";
}

type ReactComponentInstance = React.ComponentElement<any, any>;

interface AppState {
	page: ReactComponentInstance
}

export class App extends React.Component<AppProps, AppState> {
	static instance: App;

	constructor(props) {
		super(props);
		App.instance = this;
		this.state = {
			page: <PageMain/>
		}
	}

	changeComponent(component: ReactComponentInstance) {
		//console.log("set component", component);
		this.setState({page: component});
	}

	render() {
		return (
			<PersistentDrawerLeft>
				{this.state.page}
				<div className="invertedLineParent">
					<div className="invertedLine"></div>
				</div>
			</PersistentDrawerLeft>
		)
	}
}
