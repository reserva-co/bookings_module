/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Calendar from './calendar';
import fetchPriceAction from '../actions/pricesAction';
import PriceAndRatingContainer from '../containers/priceAndRatingContainer';
import CheckInContainer from '../containers/checkInContainer';
import Guests from './guests';
import popupCalendarActions from '../actions/popupCalendarActions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleOutsideClick, false);
    const { fetchPrice } = this.props;
    fetchPrice();
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleOutsideClick(event) {
    const { toggleCalendarsOff } = this.props;
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      toggleCalendarsOff();
    }
  }

  render() {
    const { checkin, checkout } = this.props;
    return (
      <div>
        <div>
          <div id="module-container">
            <div id="module-container-2">
              <PriceAndRatingContainer />
              <CheckInContainer />
              <div ref={this.setWrapperRef}>
                {checkin ? <Calendar /> : null}
                {checkout ? <Calendar /> : null}
              </div>
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
  toggleCalendarsOff: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  checkin: state.toggleCalendar.checkin,
  checkout: state.toggleCalendar.checkout,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPrice: () => { dispatch(fetchPriceAction()); },
  toggleCalendarsOff: () => { dispatch(popupCalendarActions.toggleCalendarsOff()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
