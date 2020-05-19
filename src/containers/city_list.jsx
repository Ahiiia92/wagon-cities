import React, { Component } from 'react';
import City from './city';

class CityList extends Component {
  static defaultProps = {
    cities: [{
        'name': 'Paris',
        'address': '16 Villa Gaudelet, 75011 Paris',
        'slug': 'paris'
      }]
    }

  render() {
    return (
      <div className="list-group-item">
        {this.props.cities.map((city) => {
          return <City city={city} key={city.name} />;
        })}
      </div>
    );
  }
}

export default CityList;
