import React, { Component } from 'react'
import Checkbox from '../checkbox';
import classes from './index.module.scss'

export default class CheckboxGroup extends Component {
	state = {}
	toggle = (name) => () => {
		this.setState(prev => (
			{ [name]: !prev[name] }
		), this.callback)
	}
	selectAll = () => {
		const values = this.props.options.reduce((acc, prev, index) => (
			{ ...acc, [index]: true }
		), {});
		this.setState(values, this.callback)
	}
	callback = () => {
		const values = this.props.options.map((e, i) => (
			this.state[i] ? this.state[i] : false
		));
		this.props.onChange(values)
	}
	render() {
		return (
			<div className={classes.container}>
				<div className={classes.header}>
					{this.props.title}
					<a
						onClick={this.selectAll}
					>Tümünü Seç</a>
				</div>
				<div classes={classes.options}>
					{this.props.options.map((option, index) => {
						return (
							<Checkbox name={option} checked={this.state[index] ? this.state[index] : false} onClick={this.toggle(index)} />
						)
					})}
				</div>
			</div>
		)
	}
}
