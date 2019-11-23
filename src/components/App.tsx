import React from "react";
import PersistentDrawerLeft from "./PersistentDrawerLeft"
import PageMain from "../components/PageMain";
import "../style/App.scss";

//export function setAppComponent(component: React.Component) {
export function setAppComponent(component: any) {
	var app = App.instance;
	app.changeComponent(component);
}

type ReactComponentInstance = React.ComponentElement<any, any>;

interface Props {
	nothing?: "yet";
}

interface State {
	page: ReactComponentInstance
}

export class App extends React.Component<Props, State> {
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
