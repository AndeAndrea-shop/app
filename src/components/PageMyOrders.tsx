import React from "react"
import { Table, TableRow, TableCell, TableHead, TableBody, Typography, Divider } from "@material-ui/core";

interface Props {
	// nothing yet
}

interface State {
	// nothing yet
}

export default class PageMyOrders extends React.Component<Props, State> {
	constructor(props) {
		super(props);
	}

	render() {
		return <>
			<Typography variant="h6" align="center">My Orders</Typography>
			<Divider/>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Description</TableCell>
						<TableCell>Size</TableCell>
						<TableCell>Condition</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableCell>Skirt</TableCell>
						<TableCell>L</TableCell>
						<TableCell>New</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Blouse</TableCell>
						<TableCell>L</TableCell>
						<TableCell>Fine</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Jacket</TableCell>
						<TableCell>XL</TableCell>
						<TableCell>Fine</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</>
	}
}
