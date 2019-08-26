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
    const { price } = this.props;
    return (
      <div>
        <div id="module-container">
          <div id="module-container-2">
            <span>
  $
              { price }
              {' '}
  per night
            </span>
            <br />
              &#9733;&#9733;&#9733;&#9733;
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
});

// gives price to this.props in App


const mapDispatchToProps = (dispatch) => ({
  fetchPrice: () => { dispatch(fetchPriceAction()); },
});

// gives fetchPrice to this.props in App

export default connect(mapStateToProps, mapDispatchToProps)(App);
