import React, { Component } from 'react';
import classes from './index.module.scss';
import { clickOut } from '../../partials';

export default class SelectBox extends Component {
	state = {
		show: false,
		options: [],
		value: ''
	}
	click = (e) => {
		clickOut(e, classes.inputWrapper, (status) => {
			if (status) {
				this.setState({ show: false });
				document.removeEventListener('click', this.click)
			}
		})
	}
	toggleOptions = (val) => (ctx) => {
		this.setState({ show: val });
	}
	select = (option) => () => {
		this.setState({
			value: option.Name + `(${option.Code})`,
			show: false
		});
		document.removeEventListener('click', this.click)
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
		}, () => {
			const { show } = this.state;
			if (show) {
				document.addEventListener('click', this.click)
			}
		});

	}
	render() {
		const { props } = this;
		const { show, value, options } = this.state;
		return (
			<div className={classes.inputWrapper}>
				<img src={props.icon} alt={' '} />
				<input placeholder={props.placeholder} type={props.type}
					onChange={this.onChange}
					value={value}
				/>
				<div className={`${classes.options} ${show ? classes.open : ''}`}>
					<ul>
						{options.length < 1 ?
							<li>Sonuç Bulunamadı</li>
							:
							options.map(option => {
								return (
									<li key={option.Code} onClick={this.select(option)}>
										<span>{option.Name}</span>
										<span>{option.Code}</span>
									</li>
								)
							})
						}
					</ul>
				</div>
			</div>
		)
	}
}