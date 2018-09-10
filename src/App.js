import React, { Component } from 'react';
import Header from './components/header';
import SearchBar from './components/searchBar';
import CheckboxGroup from './components/checkboxGroup';
import ResultItem from './components/result';
import Slider from './components/slider';
import TitleBar from './components/titlebar'
import classes from './index.module.scss';

class App extends Component {
  state = {
    priceRange: 1500,
    timeRange: 75
  }
  onChange = (title) => (val) => {
    this.setState({ [title]: val })
  }
  render() {
    const { priceRange, timeRange } = this.state;
    const priceRangeTitle = `Max Fiyat : ${priceRange} TL`;
    const timeRangeTitle = `Max Uçuş Süresi : ${Math.floor(timeRange / 60)} saat ${timeRange % 60} dakika`;
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <div className={classes.container}>
          <div className={classes.filters}>
            <CheckboxGroup title={'Aktarma'} options={['Sadece Aktarmasız', '1 Aktarma', `2+ Aktarma`]} onChange={console.log} />
            <CheckboxGroup title={'Sınıf'} options={['Ekonomi', 'Business', `Kurumsal`]} onChange={console.log} />
            <Slider title={priceRangeTitle} min={0} max={2000} val={1500} onChange={this.onChange('priceRange')} />
            <Slider title={timeRangeTitle} min={0} max={120} val={75} onChange={this.onChange('timeRange')} />
            <CheckboxGroup title={'Havayolu'} options={['Turkish Airlines', 'Pegasus Airlines', `Borajet`]} onChange={console.log} />
          </div>
          <div className={classes.results}>
            <TitleBar />
            {[0, 1, 2, 3].map(e => (<ResultItem key={e} />))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
