import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ActiveCity extends Component {
  componentWillMount(city) {
    this.props.selectCity(this.props.city);
  }

  render() {
    if (!this.props.selectCity) {
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
    selectCity: state.selectCity
  };
}

export default connect(mapDispatchToProps, mapStateToProps)(ActiveCity);
