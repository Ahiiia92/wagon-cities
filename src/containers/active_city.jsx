import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectCity } from '../actions';

class ActiveCity extends Component {
  componentWillMount() {
    this.props.selectCity(this.props);
    console.log(this.props.selectCity);
  }

  render() {
    if (!this.props.city) {
      return (
        <div className="active-city">
          <p>Select a city...</p>
        </div>
      );
    }

    const url = `https://kitt.lewagon.com/placeholder/cities/${this.props.selectCity.slug}`;

    return (
      <div className="active-city">
        <h3>{this.props.selectCity.name}</h3>
        <p>{this.props.selectCity.address}</p>
        <img src={url} width="100%" alt="View of the city" />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators ({ selectCity }, dispatch);
}

function mapStateToProps(state) {
  return {
    selectCity: state.SelectCity
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveCity);
