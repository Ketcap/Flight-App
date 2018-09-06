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
    const { show } = this.state;
    return (
      <div className={`${classes.wrapper} ${show ? classes.show : ''}`}>
        <div className={classes.resultItem}>
          <div className={classes.airlines}>
            <span>AtlasJet</span>
            <span>AnadoluJet</span>
            <span>LutfenSA</span>
          </div>
          <div className={classes.departure}>
            <span className={classes.time}>
              22:30
					</span>
            <span className={classes.code}>
              ADB
					</span>
          </div>
          <div className={classes.arrival}>
            <span className={classes.time}>
              22:30
					</span>
            <span className={classes.code}>
              ADB
					</span>
          </div>
          <div className={classes.timing}>
            <span>
              Direkt
					</span>
            <span>
              1 Saat 15 Dakika
					</span>
          </div>
          <div className={classes.price}>
            <div>
              <div className={classes.priceInfo}>
                <span>72TL</span>
                <span>Turk Hava Yollari</span>
              </div>
              <Button type={'secondary'} onClick={this.toggle}>Satin Al </Button>
            </div>
          </div>
        </div>
        {show &&
          <div class={classes.moreInfo}>
            <div>
              <div className={classes.flightInfo}>
                {[1, 2].map(e => (
                  <div>
                    <div className={classes.exDeparture}>
                      <div className={classes.exTime}>21:30</div>
                      <div className={classes.exCode}>Izmir ADB</div>
                    </div>
                    <div className={classes.cycle}>
                      1 Saat 15 Dakika
                </div>
                    <div className={classes.exDeparture}>
                      <div className={classes.exTime}>21:30</div>
                      <div className={classes.exCode}>Izmir ADB</div>
                    </div>
                    <div className={classes.exDeparture}>
                      <div className={classes.exTime}>Turkish Airlines</div>
                      <div className={classes.exCode}>TK6106 Ekonomi</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className={classes.airlinesInfo}>
                <ul>
                  <li>
                    <span>900tl</span>Tripsta
                  </li>
                  <li>
                    <span>800tl</span>Pegasus
                  </li>
                  <li>
                    <span>850tl</span>SkyScanner
                  </li>
                </ul>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}
