import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import City from '../containers/city';
import { setCities } from '../actions';

class CityList extends Component {
  // static defaultProps = {
  //   cities: [
  // { name: "Paris", address: "16 Villa Gaudelet, 75011 Paris", slug: "paris" },
  // { name: "London", address: "14-22 Elder St, London E1 6BT", slug: "london" }
  //     ]
  //   }
  renderList() {
    return this.props.cities.map((city) => {
      return (
        <City city={city} key={city.name} />
      );
    });
  }

  render() {
    return (
      <div className="list-group-item">
        {this.renderList}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCities }, dispatch);
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
