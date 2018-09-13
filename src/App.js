import React, { Component } from 'react';
import Header from './components/header';
import SearchBar from './components/searchBar';
import FilterGroup from './components/filterGroup';
import TitleBar from './components/titlebar'
import Pagination from './components/pagination';
import Results from './components/results';
import TotalResults from './components/totalResults'
import classes from './index.module.scss';
import { Context } from './context';

class App extends Component {
  render() {
    return (
      <Context>
        <div className="App">
          <Header />
          <SearchBar />
          <TotalResults />
          <div className={classes.container}>
            <div className={classes.filters}>
              <FilterGroup />
            </div>
            <div className={classes.results}>
              <TitleBar />
              <Results />
            </div>
            <div className={classes.break} />
            <div className={classes.pagination}>
              <Pagination />
            </div>
          </div>
        </div>
      </Context>
    );
  }
}

export default App;
