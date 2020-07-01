import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectCity } from '../actions';

const City = (props) => {
  return (
    <div
    className="card-product"
    onClick={() => props.selectCity(props.city)}
    >
      <div className="card-product-infos">
        <h2>{props.city.name}</h2>
        <p>{props.city.address}</p>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCity }, dispatch);
}

export default connect(null, mapDispatchToProps)(City);
