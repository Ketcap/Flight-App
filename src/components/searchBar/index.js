import React, { Component } from 'react'
import classes from './index.module.scss';

import SelectBox from '../selectBox';
import SelectDate from '../selectDate';
import PersonSelect from '../personSelect';
import Button from '../button';

import { Flight } from '../../context';

export default class SearchBar extends Component {
  render() {
    return (
      <Flight.Consumer>
        {({ data: { Places = [] } }) => {
          const places = Places.filter(e => e.Type === 'Airport');
          return (
            <div className={classes.searchbar}>
              <div className={classes.container}>
                <SelectBox icon="/svg/flight-from-icon.svg" placeholder="Nereden"
                  options={places}
                />
                <SelectBox icon="/svg/flight-from-icon.svg" placeholder="Nereye"
                  options={places}
                />
                <div className={classes.break} />
                <SelectDate icon="/svg/date-of-departure.svg" placeholder="Gidiş" />
                <SelectDate icon="/svg/date-of-return.svg" placeholder="Geliş" />
                <div className={classes.break} />
                <PersonSelect icon="/svg/person.svg" placeholder={0} />
                <Button onClick={console.log} wrapperClass={classes.buttonWrapper} type={'primary'}>Yeniden Ara</Button>
              </div>
            </div>
          )
        }}

      </Flight.Consumer>
    )
  }
}
