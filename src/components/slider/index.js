import React, { Component } from 'react'
import classes from './index.module.scss';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: props.val
    }
  }
  onChange = (event) => {
    this.setState({
      val: event.target.value
    });
    this.props.onChange(event.target.value);
  }
  render() {
    const { val } = this.state;
    const percent = (val - this.props.min) / (this.props.max - this.props.min) * 100;
    return (
      <div className={classes.container}>
        <div className={classes.title}>
          {this.props.title}
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
