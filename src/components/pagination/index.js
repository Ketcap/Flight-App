import React, { Component } from 'react'
import classes from './index.module.scss';
import { Flight } from '../../context';
export default class Pagination extends Component {
  changePage = (index) => () => {
    this.props.onSelect(index + 1);
  }
  render() {
    return (
      <Flight.Consumer>
        {({ page, pageSize, data: { Itineraries = [] }, fn: { changePage } }) => {
          const max = Math.floor(Itineraries.length / pageSize);
          return (
            <div className={classes.wrapper}>
              {new Array(max).fill('').map((val, index) => (
                <div key={index} className={index + 1 === page ? classes.active : ''} onClick={() => changePage(index + 1)}>
                  {index + 1}
                </div>
              ))}
            </div>
          )
        }}
      </Flight.Consumer>
    )
  }
}
