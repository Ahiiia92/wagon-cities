import React from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectCity } from '../actions';

const City = (props) => {
  return (
    <div className="card-product active-city list-group-item">
      <div className="card-product-infos">
        <h2>TITLE HERE {props.city.name}</h2>
        <p>{props.city.address}</p>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCity, dispatch });
}

export default connect(null, mapDispatchToProps)(City);
