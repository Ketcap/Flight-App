import React, { Component } from 'react';
import classes from '../selectBox/index.module.scss';
import { clickOut } from '../../partials';

export default class SelectBox extends Component {
	state = {
		show: false,
		value: '',
		adult: 0,
		child: 0,
		baby: 0
	}
	click = (e) => {
		clickOut(e, classes.inputWrapper, (status) => {
			if (status) {
				const { adult, child, baby } = this.state;
				this.setState({ value: adult + child + baby, show: false })
			}
		})
	}
	toggleOptions = (val) => (ctx) => {
		this.setState({ show: val });
		if (val) {
			document.addEventListener('click', this.click)
		} else {
			document.removeEventListener('click', this.click)
		}
	}
	update = (name, val) => () => {
		this.setState(prev => ({
			[name]: prev[name] + val < 0 ? 0 : prev[name] + val
		}))
	}
	render() {
		const { props } = this;
		const { show, value } = this.state;
		return (
			<div className={[classes.inputWrapper, classes.person].join(' ')}>
				<img src={props.icon} alt={' '} />
				<input placeholder={props.placeholder} type={props.type}
					onFocus={this.toggleOptions(true)}
					value={value}
				/>
				<div className={`${classes.options} ${classes.personSelect} ${show ? classes.open : ''}`}>
					<ul>
						{[{ name: 'adult', text: 'Yetişkin' }, { name: 'child', text: 'Çocuk' }, { name: 'baby', text: 'Bebek' }].map((type, index) => {
							return (
								<li key={type.name} className={classes.person}>
									<div>{type.text}</div>
									<div>
										<img onClick={this.update(type.name, -1)} src="/svg/minus.svg" alt={' '} />
										{this.state[type.name]}
										<img onClick={this.update(type.name, +1)} src="/svg/plus.svg" alt={' '} />
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		)
	}
}