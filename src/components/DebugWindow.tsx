import React from "react"

export default class DebugWindow extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <>
			<h1>Window.innerWidth: {window.innerWidth}</h1>
			<h1>Window.innerHeight: {window.innerHeight}</h1>
			<h1>Date: {Date.now()}</h1>
		</>
	}
}
