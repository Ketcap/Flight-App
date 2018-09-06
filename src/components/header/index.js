import React, { Component } from 'react'
import classes from './index.module.scss';
import MenuItem from '../menuItem/';

export default class Header extends Component {
	render() {
		return (
			<div className={classes.header}>
				<img className={classes.icon} src="/images/thy-icon.png" alt={' '} />
				<ul className={classes.menu}>
					<MenuItem icon="/svg/home-icon.svg" text="Anasayfa" />
					<MenuItem icon="/svg/opportunity-icon.svg" text="Süper Fırsatlar" />
					<MenuItem icon="/svg/question-icon.svg" text="Yardım" />
					<MenuItem icon="/svg/message-icon.svg" text="İletişim" />
				</ul>
			</div>
		)
	}
}
