import React, { Component } from 'react';

import './Parent.css';
import GoogleMapReact from 'google-map-react';
import Child from '../Child';

export default class Parent extends Component {

	constructor(props) {
		super()
	
		this.state = {
			color: "white"
		}
	}
	
	handleSetColor = () => {
		this.setState({
			color: "red"
		})

		fetch("http://localhost:3000/users")
		.then(response => response.text())
  		.then(value => alert(value));
	}

	render() {
		return (
			<div style={{ height: '100vh', backgroundColor: this.state.color, width: '100%' }}>
				<Child setColor={this.handleSetColor}></Child>
			</div>
		)
	}
}