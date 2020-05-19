import React, { Component } from 'react';

class City extends Component {
  render() {
    return (
      <div className="card-product active-city">
        <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg" />
        <div className="card-product-infos">
          <h2>{this.props.name}</h2>
          <p>Product description with <strong>relevant info</strong> only.</p>
        </div>
      </div>
    );
  }
}

export default City;
