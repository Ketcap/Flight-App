import React, { Component } from 'react'
import classes from './index.module.scss';
import Button from '../button';

import { Flight } from '../../classes';

import { withContext } from '../../context';

class Result extends Component {
  state = {
    price: 0
  }
  toggle = () => {
    this.setState(prev => ({
      show: !prev.show
    }))
  }
  componentDidMount() {
    console.log({ ...this.props.OutboundLegId });
  }
  render() {
    const { Order, OutboundLegId: { DestinationStation: { Code: dCode }, OriginStation: { Code: oCode }, Carriers, Departure, Arrival, Stops, Duration } } = this.props;
    const deptTime = new Date(Departure);
    const arrTime = new Date(Arrival);
    return (
      <div className={`${classes.wrapper}`}>
        <div className={[classes.section, classes.carrier].join(' ')}
          style={{
            backgroundImage: `url(${Carriers[0].ImageUrl})`
          }} />
        <div className={[classes.section, classes.departure].join(' ')}>
          <span className={classes.title}>{deptTime.getHours() < 10 ? '0' : ''}{deptTime.getHours()}:{deptTime.getMinutes() < 10 ? '0' : ''}{deptTime.getMinutes()}</span>
          <span className={classes.subtitle}>{oCode}</span>
        </div>
        <div className={classes.section}>
          <span className={classes.title}>{arrTime.getHours() < 10 ? '0' : ''}{arrTime.getHours()}:{arrTime.getMinutes() < 10 ? '0' : ''}{arrTime.getMinutes()}</span>
          <span className={classes.subtitle}>{dCode}</span>
        </div>
        <div className={classes.section}>
          <span className={classes.title}>{Stops.length > 0 ? 'Aktarmalı' : 'Direkt'}</span>
          <span className={classes.subtitle}>{Math.floor(Duration / 60)} saat {Duration % 60} dakika</span>
        </div>
        <div className={[classes.section, classes.grey].join(' ')}>
          <span className={classes.title}>{Order.lowestPrice} TL</span>
          <span className={classes.subtitle}>{Carriers[0].Name}</span>
        </div>
        <div className={[classes.section, classes.grey].join(' ')}>
          <Button type={'secondary'}>
            İncele
          </Button>
        </div>
      </div>
    )
  }
}
export default withContext(Result)