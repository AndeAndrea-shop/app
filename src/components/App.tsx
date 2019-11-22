import React from "react";
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

export function setAppPage(which: string) {
	var app = App.instance;
	app.changePage(which);
}

interface AppProps {
	nothing?: "yet";
}

interface AppState {
	page: string;
}

export class App extends React.Component<AppProps, AppState> {
	static instance: App;

	constructor(props) {
		super(props);
		App.instance = this;
		this.state = {
			page: "main"
		}
	}

	changePage(which: string) {
		//console.log("changePage", which);
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
			case "profile":
				pageComponent = <PageProfile/>;
				break;
			case "more":
				pageComponent = <PageMore/>;
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
