import React, { Component } from 'react';
import Header from './components/header';
import SearchBar from './components/searchBar';
import CheckboxGroup from './components/checkboxGroup';
import ResultItem from './components/result';
import TitleBar from './components/titlebar'
import classes from './index.module.scss';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar />
        <div className={classes.container}>
          <div className={classes.filters}>
            <CheckboxGroup title={'Aktarma'} options={['Aktarmasız', '1 Aktarmalı', `2'de aktarmalı`]} onChange={console.log} />
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
