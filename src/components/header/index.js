import React, { Component } from 'react'
import classes from './index.module.scss';
import MenuItem from '../menuItem/';

export default class Header extends Component {
  state = {
    menu: false
  }
  toggle = () => {
    this.setState(prev => ({ menu: !prev.menu }))
  }
  render() {
    const { menu } = this.state;
    return (
      <div className={`${classes.header} ${menu ? classes.active : ''}`}>
        <img className={classes.icon} src="/images/thy-icon.png" alt={' '} />
        <a onClick={this.toggle} className={classes.menuIcon}>
          <img src={'/svg/menu.svg'} alt={'menu'} />
        </a>
        <ul className={classes.menu}>
          <MenuItem icon="/svg/home-icon.svg" text="Anasayfa" />
          <MenuItem icon="/svg/opportunity-icon.svg" text="Süper Fırsatlar" />
          <MenuItem icon="/svg/question-icon.svg" text="Yardım" />
          <MenuItem icon="/svg/message-icon.svg" text="İletişim" />
        </ul>
      </div>
    )
  }
}
