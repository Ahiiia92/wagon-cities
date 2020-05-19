import React, { Component } from 'react';
import CityList from '../containers/city_list';
import City from '../containers/city';

class App extends Component {
  render() {
    return (
      <div className="app">
        <CityList />
        <City />
      </div>
    );
  }
}

export default App;
