import React, { Component } from 'react'
import classes from './index.module.scss';

export default class Slider extends Component {
  onChange = (event) => {
    this.props.onChange(event.target.value);
  }
  render() {
    const { val } = this.props;
    const percent = (val - this.props.min) / (this.props.max - this.props.min) * 100;
    return (
      <div className={classes.container}>
        <div className={classes.title}>
          {this.props.children}
        </div>
        <input type="range" min={this.props.min} max={this.props.max} step="1" value={val} onChange={this.onChange}
          style={{
            background: `linear-gradient(90deg,#F12A15 ${percent}%, #DBE3E6 ${percent}%)`
          }}
        />
      </div>
    )
  }
}
