import React from "react"
import { Table, TableRow, TableCell } from "@material-ui/core";

export default class PageMyOrders extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <>
			<h1>Page MyOrders Demo</h1>
			<Table>
				<TableRow>
					<TableCell>One</TableCell>
					<TableCell>Two</TableCell>
					<TableCell>Three</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>1</TableCell>
					<TableCell>2</TableCell>
					<TableCell>3</TableCell>
				</TableRow>
			</Table>
		</>
	}
}
