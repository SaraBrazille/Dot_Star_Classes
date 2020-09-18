import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


import './Child.css';

export default class Child extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<button onClick={this.props.setColor}>Test</button>
		)
	}
}