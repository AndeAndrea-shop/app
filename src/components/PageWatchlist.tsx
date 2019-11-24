import React from "react"
import { List, ListItem } from "@material-ui/core";

export default class PageWatchlist extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <>
			<h1>Watchlist</h1>
			<List>
				<ListItem>Skirt</ListItem>
				<ListItem>Blouse</ListItem>
				<ListItem>Jeans</ListItem>
			</List>
		</>
	}
}
