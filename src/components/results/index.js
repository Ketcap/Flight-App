import React, { Component } from 'react';
import Result from '../result';
import { Flight } from '../../context';

export default class Results extends Component {
  render() {
    return (
      <Flight.Consumer>
        {({ list = [], page, pageSize }) => {
          const startingPoint = page === 1 ? 0 : page * 10;
          return (
            list.slice(startingPoint, startingPoint + pageSize).map(e => (
              <Result {...e} />
            ))
          )

        }}
      </Flight.Consumer>
    )
  }
}
