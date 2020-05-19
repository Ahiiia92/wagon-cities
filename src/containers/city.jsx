import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import selectCity from '../actions';

const City = (props) => {
  return (
    <div className="card-product" onClick={() => props.selectCtiy(props.city)} >
      <div className="card-product-infos">
        NOTHING
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCity }, dispatch);
}

export default connect(null, mapDispatchToProps)(City);
