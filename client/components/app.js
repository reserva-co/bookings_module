/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CheckIn from './check';
import Calendar from './calendar';
import fetchPriceAction from '../actions/pricesAction';

class App extends React.Component {
  componentDidMount() {
    const { fetchPrice } = this.props;
    fetchPrice();
  }

  render() {
    const { price, rating } = this.props;
    const percentage = `${((rating / 5).toFixed(2)) * 100}%`;
    return (
      <div>
        <div id="module-container">
          <div id="module-container-2">
            <span>
              <span className="price-name">
                <span>$</span>
                {price}
              </span>
              {' '}
              <span className="small-text">per night</span>
            </span>
            <br />
            <div className="star-ratings-css">
              <div className="star-ratings-css-top" style={{ width: percentage }}>
                ★★★★★
              </div>
              <div className="star-ratings-css-bottom">
                ★★★★★
              </div>
            </div>
            <div className="linebreak">
              <hr />
            </div>
            <CheckIn />
          </div>
        </div>
        <br />
        <br />
        <Calendar />
      </div>
    );
  }
}

App.propTypes = {
  fetchPrice: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  price: state.costs.price,
  rating: state.costs.rating,
  numberOfReviews: state.costs.numberOfReviews,
  cleaningFee: state.costs.serviceFee,
  serviceFee: state.costs.serviceFee,
  views: state.costs.views,
});

// gives price to this.props in App

const mapDispatchToProps = (dispatch) => ({
  fetchPrice: () => { dispatch(fetchPriceAction()); },
});

// gives fetchPrice to this.props in App

export default connect(mapStateToProps, mapDispatchToProps)(App);
