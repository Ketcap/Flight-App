import React, { Component } from 'react';
import classes from '../selectBox/index.module.scss';
import { Days, Months, getDays } from './dates';
import { clickOut } from '../../partials';

export default class SelectDate extends Component {
	constructor(props) {
		super(props);
		const date = new Date();
		this.state = {
			month: date.getMonth() + 1,
			year: date.getFullYear(),
			show: false,
			value: ''
		}
	}
	click = (e) => {
		clickOut(e, classes.inputWrapper, (status) => {
			if (status) {
				this.setState({ show: false })
			}
		})
	}
	toggleDate = (val) => (ctx) => {
		this.setState({ show: val });
		if (val) {
			document.addEventListener('click', this.click)
		} else {
			document.removeEventListener('click', this.click)
		}
	}
	selectDate = (number) => () => {
		if (!number)
			return;
		const { year, month } = this.state;
		this.setState({
			show: false,
			value: [number, month, year].join('.')
		})
	}
	changeMonth = (direction) => () => {
		this.setState(prev => ({
			month: (prev.month + direction > 12 ? 1 : (prev.month + direction < 1 ? 12 : prev.month + direction)),
			year: (prev.month + direction > 12 ? prev.year + 1 : (prev.month + direction < 1 ? prev.year - 1 : prev.year)),
		}))
	}
	onChange = (event) => {
		const { options } = this.props;
		const { value } = event.target;
		this.setState({
			value,
			show: value.length > 1,
			options: options.filter(option => {
				return (
					option.Code.toLowerCase().indexOf(value.toLowerCase()) > -1 || option.Name.toLowerCase().indexOf(value.toLowerCase()) > -1
				)
			})
		});
	}
	render() {
		const { props } = this;
		const { show, value, month, year } = this.state;
		return (
			<div className={classes.inputWrapper}>
				<img src={props.icon} alt={' '} />
				<input placeholder={props.placeholder} type={props.type}
					onFocus={this.toggleDate(true)}
					value={value}
				/>
				<div className={`${classes.options} ${classes.dateSelect} ${show ? classes.open : classes.close}`}>
					<span className={classes.monthTitle}>
						<span onClick={this.changeMonth(-1)}><img src={'/svg/left.svg'} alt={' '} /></span>
						<span>
							{Months[month]}
							- {year}
						</span>
						<br />
						<span onClick={this.changeMonth(1)}><img src={'/svg/right.svg'} alt={' '} /></span>
					</span>
					<div className={classes.dayWrapper}>
						{Days.map((day, index) => (
							<span key={index} className={classes.date}>
								{day.substr(0, 3)}
							</span>
						))}
					</div>
					<div className={classes.calendar}>
						{getDays(month, year).map((number, index) => (
							<span key={index} className={!number ? classes.noHover : undefined}
								onClick={this.selectDate(number)}
							>
								{number}
							</span>
						))}
					</div>
				</div>
			</div>
		)
	}
}