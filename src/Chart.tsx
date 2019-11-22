import * as React from 'react';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, amount) {
	return { time, amount };
}

const data = [
	createData('00:00', 0),
	createData('03:00', 300),
	createData('06:00', 600),
	createData('09:00', 800),
	createData('12:00', 1500),
	createData('15:00', 2000),
	createData('18:00', 2400),
	createData('21:00', 2400),
	createData('24:00', undefined),
];

export interface ChartProps {
	name: string;
}

export interface ChartState {
	data: any[];
}

export default class Chart extends React.Component<ChartProps, ChartState> {
	constructor(props) {
		super(props);
		this.state = {
			data
		}
	}

	render() {
		console.log("render", this.state);
		return (
			<React.Fragment>
				<Title>Today</Title>
				<ResponsiveContainer>
					<LineChart
						data={this.state["data"]}
						margin={{
							top: 16,
							right: 16,
							bottom: 0,
							left: 24,
						}}
					>
						<XAxis dataKey="time" />
						<YAxis>
							<Label angle={270} position="left" style={{ textAnchor: 'middle' }}>
								Sales ($)
							</Label>
						</YAxis>
						<Line type="monotone" dataKey="amount" stroke="#556CD6" dot={false} />
					</LineChart>
				</ResponsiveContainer>
			</React.Fragment>
		);
	}
}
