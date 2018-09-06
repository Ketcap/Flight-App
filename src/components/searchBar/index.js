import React, { Component } from 'react'
import classes from './index.module.scss';

import SelectBox from '../selectBox';
import SelectDate from '../selectDate';
import PersonSelect from '../personSelect';
import Button from '../button';
import { places } from '../../config.js';

export default class SearchBar extends Component {
	state = {
		places: places.filter(e => (e.Type === 'Airport'))
	}
	select = (name) => (value) => {
	}
	render() {
		const { places } = this.state;
		return (
			<div className={classes.searchbar}>
				<div className={classes.container}>
					<SelectBox icon="/svg/flight-from-icon.svg" placeholder="Nereden"
						options={places}
					// onSelect={this.select('departure')}
					/>
					<SelectBox icon="/svg/flight-from-icon.svg" placeholder="Nereye"
						options={places}
					// onSelect={this.select('destination')}
					/>
					<SelectDate icon="/svg/date-of-departure.svg" placeholder="Gidiş" />
					<SelectDate icon="/svg/date-of-return.svg" placeholder="Geliş" />
					<PersonSelect icon="/svg/person.svg" placeholder={0} />
					<Button onClick={console.log} wrapperClass={classes.buttonWrapper} type={'primary'}>Yeniden Ara</Button>
				</div>
			</div>
		)
	}
}
