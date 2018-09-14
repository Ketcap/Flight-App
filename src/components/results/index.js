import React, { Component } from 'react';
import Result from '../result';
import { Flight } from '../../context';

export default class Results extends Component {
  render() {
    return (
      <Flight.Consumer>
        {({ list = [], page, pageSize }) => {
          const startingPoint = (page - 1) * pageSize
          const items = [...list.slice(startingPoint, startingPoint + pageSize)]
          return (
            items.map((e, index) => (
              <Result {...e} key={e.BookingDetailsLink.Body} />
            ))
          )

        }}
      </Flight.Consumer>
    )
  }
}
