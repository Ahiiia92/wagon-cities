import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux';

class ActiveCity extends Component {
  componentWillMount(city) {
    this.props.selectCity(this.props.city);
  }

  render() {
    if (!props.activeCity) {
      return (
        <div className="active-city">
          <p>Select a city...</p>
        </div>
      );
    }

    const url = `https://kitt.lewagon.com/placeholder/cities/${props.activeCity.slug}`;

    return (
      <div className="active-city">
        <h3>{props.activeCity.name}</h3>
        <p>{props.activeCity.address}</p>
        <img src={url} width="100%" alt="View of the city" />
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    selectCity: state.selectCity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators ({ selectCity }, dispatch);
}

export default connect(mapDispatchToProps, mapStateToProps)(ActiveCity);
