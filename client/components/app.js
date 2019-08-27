/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Calendar from './calendar';
import fetchPriceAction from '../actions/pricesAction';
import PriceAndRatingContainer from '../containers/priceAndRatingContainer';
import CheckInContainer from '../containers/checkInContainer';
import Guests from './guests';

class App extends React.Component {
  componentDidMount() {
    const { fetchPrice } = this.props;
    fetchPrice();
  }

  render() {
    const { checkin } = this.props;
    return (
      <div>
        <div>
          <div id="module-container">
            <div id="module-container-2">
              <PriceAndRatingContainer />
              <CheckInContainer />
              {checkin ? <Calendar /> : null}
              <Guests />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fetchPrice: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  checkin: state.toggleCalendar.checkin,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPrice: () => { dispatch(fetchPriceAction()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
