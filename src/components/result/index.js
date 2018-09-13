import React, { Component } from 'react'
import classes from './index.module.scss';
import Button from '../button';

export default class Result extends Component {
  state = {
    show: false
  }
  toggle = () => {
    this.setState(prev => ({
      show: !prev.show
    }))
  }
  render() {
    const { Order } = this.props;
    return (
      <div className={`${classes.wrapper}`}>
        <div>
          {Order.lowestPrice}
        </div>
      </div>
    )
  }
}
