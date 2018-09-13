import React, { Component } from 'react'
import CheckboxGroup from '../checkboxGroup';
import ResultItem from '../result';
import Slider from '../slider';
import classes from './index.module.scss';

import { Flight } from '../../context';

export default class FilterGroup extends Component {
  render() {
    return (
      <Flight.Consumer>
        {({ price, priceRange, duration, timeRange, fn: { changeState }, data: { Carriers = [] } }) => {

          return (
            <React.Fragment>
              <CheckboxGroup title={'Aktarma'} options={['Sadece Aktarmasız', '1 Aktarma', `2+ Aktarma`]} onChange={console.log} />
              <CheckboxGroup title={'Sınıf'} options={['Ekonomi', 'Business', `Kurumsal`]} onChange={console.log} />
              <Slider min={price.min} max={price.max} val={priceRange} onChange={(val) => changeState('priceRange', val)}>
                Max Fiyat : <span className={classes.activeText}>{priceRange}</span>
              </Slider>
              <Slider min={duration.min} max={duration.max} val={timeRange} onChange={(val) => changeState('timeRange', val)}>
                Max Uçuş Süresi : <span className={classes.activeText}>{Math.floor(timeRange / 60)} saat {timeRange % 60} dakika</span>
              </Slider>
              <CheckboxGroup title={'Havayolu'} options={Carriers} onChange={console.log} />
            </React.Fragment>
          )
        }}
      </Flight.Consumer>
    )
  }
}
