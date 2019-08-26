/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CheckIn from './check';
import Calendar from './calendar';
import fetchPriceAction from '../actions/pricesAction';
import PriceAndRatingContainer from '../containers/priceAndRatingContainer';

class App extends React.Component {
  componentDidMount() {
    const { fetchPrice } = this.props;
    fetchPrice();
  }

  render() {
    return (
      <div>
        <div id="module-container">
          <div id="module-container-2">
            <PriceAndRatingContainer />
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

const mapDispatchToProps = (dispatch) => ({
  fetchPrice: () => { dispatch(fetchPriceAction()); },
});

// gives fetchPrice to this.props in App

export default connect(null, mapDispatchToProps)(App);
