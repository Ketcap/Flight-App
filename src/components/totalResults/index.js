import React, { Component } from 'react'
import Dropdown from '../dropdown';
import classes from './index.module.scss';
import { Flight } from '../../context';

export default class TotalResults extends Component {
  render() {
    return (
      <Flight.Consumer>
        {({ data: { Itineraries = [] }, fn: { sortChange } }) => {
          const results = Itineraries.length;
          return (
            <div className={classes.wrapper}>
              <div>
                <h2>{results} Uçuş Listeleniyor.</h2>
              </div>
              <div>
                <Dropdown
                  list={[
                    { name: 'Sıralama', value: -1, selected: true, disabled: true },
                    { name: 'Pahalıdan Ucuza', value: 0 },
                    { name: 'Ucuzdan Pahalıya', value: 1 },
                    { name: 'En Yakın Tarihli', value: 2 },
                    { name: 'En Uzak Tarihli', value: 3 }
                  ]}
                  onSelect={sortChange}
                />
              </div>
            </div>
          )
        }}
      </Flight.Consumer>
    )
  }
}