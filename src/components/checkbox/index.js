import React, { Component } from 'react'
import classes from './index.module.scss';

export default class Checkbox extends Component {
  render() {
    const { checked } = this.props;
    return (
      <div onClick={this.props.onClick} className={classes.container}>
        <div className={`${classes.checkBox} ${checked ? classes.checked : ''}`} />
        {this.props.name}
      </div>
    )
  }
}