import React from 'react';
import fetch from 'unfetch';
import { url } from './config';
const Flight = React.createContext();


class Context extends React.Component {
  state = {
    timeRange: 75,
    data: {},
    price: {
      min: 0,
      max: 100
    },
    duration: {
      min: 0,
      max: 100
    },
    page: 1,
    pageSize: 10
  }
  onChange = (title) => (val) => {
    this.setState({ [title]: val })
  }
  changeState = (key, val) => {
    this.setState({ [key]: val });
  }
  pageChange = (page) => {
    this.setState({ page });
  }
  sortChange = (value) => {
    this.setState(prev => ({
      ...prev,
      results: prev.data.Itineraries.sort((first, last) => {
        switch (value) {
          case 0:
            return last.Order.lowestPrice - first.Order.lowestPrice;
          case 1:
            return first.Order.lowestPrice - last.Order.lowestPrice;

          default:
            return;
        }

      })
    }))
  }
  async _fetch() {
    const resp = await fetch(url).then(r => r.json());
    const { Itineraries } = resp;
    const result = Itineraries.reduce((prev, cur, index) => {
      const { price, duration } = prev;
      const { Order: { lowestPrice, highestPrice }, OutboundLegId: { Duration: durationTime } } = cur;
      if (index === 0) {
        return { price: { min: lowestPrice, max: highestPrice }, duration: { min: durationTime, max: durationTime } };
      }
      return {
        ...prev,
        price: {
          min: lowestPrice < price.min ? lowestPrice : price.min,
          max: highestPrice > price.max ? highestPrice : price.max
        },
        duration: {
          min: durationTime < duration.min ? durationTime : duration.min,
          max: durationTime > duration.max ? durationTime : duration.max
        }
      }
    }, { price: { min: 0, max: 0 }, duration: { min: 0, max: 0 } });
    this.setState({
      data: { ...resp },
      priceRange: ((result.price.min + result.price.max) / 2).toFixed(2),
      timeRange: (result.duration.min + result.duration.max) / 2,
      price: result.price,
      duration: result.duration,
      list: Itineraries
    })
  }
  changePage = (page) => {
    this.setState({ page })
  }
  async componentDidMount() {
    await this._fetch();
    console.log(this.state)
  }
  render() {
    return (
      <Flight.Provider
        value={{
          ...this.state,
          fn: {
            changePage: this.changePage,
            changeState: this.changeState,
            sortChange: this.sortChange
          }
        }}
      >
        {this.props.children}
      </Flight.Provider>
    );
  }
}

const withContext = (C) => {
  return class W extends React.Component {
    render() {
      return (
        <Flight.Consumer>
          {context => (<C {...this.props} context={context} />)}
        </Flight.Consumer>
      );
    }
  }
};


export {
  Flight, Context, withContext
};