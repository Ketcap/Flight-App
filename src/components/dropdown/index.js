import React, { Component } from 'react';

import classes from './index.module.scss';

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      list: props.list
    }
  }
  select = (data) => () => {
    if (data.disabled) {
      return;
    }
    this.setState(prev => ({
      ...prev,
      open: false,
      list: prev.list.map(e => {
        return e.value === data.value ? { ...e, selected: true } : { ...e, selected: false }
      })
    }), () => {
      this.props.onSelect(data.value)
    })
  }
  toggle = (e) => {
    this.setState(prev => ({
      open: !prev.open
    }));
  }
  render() {
    const { list, open } = this.state;
    const selected = list.find(e => e.selected);
    return (
      <div className={classes.wrapper}>
        <a onClick={this.toggle}>
          {selected.name}
          <img src={'/svg/down-icon.svg'} alt={'icon'} />
        </a>
        <div className={`${classes.options} ${open ? classes.open : ''}`}>
          {list.map(e => {
            return (
              <div key={e.value} className={`${classes.list} ${e.selected ? classes.selected : ''}`} onClick={this.select(e)}>
                <a>{e.name}</a>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
