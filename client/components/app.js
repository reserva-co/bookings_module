/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchPriceAction from '../actions/pricesAction';
import toggleGuestInfo from '../actions/popupGuestsActions';
import popupCalendarActions from '../actions/popupCalendarActions';
import PriceAndRatingContainer from '../containers/priceAndRatingContainer';
import CheckInContainer from '../containers/checkInContainer';
import Calendar from './calendar';
import GuestsInfo from './guestsInfo';
import GuestsContainer from '../containers/guestsContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.setGuestWrapperRef = this.setGuestWrapperRef.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleOutsideGuestClick = this.handleOutsideGuestClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleOutsideClick, false);
    document.addEventListener('mousedown', this.handleOutsideGuestClick, false);
    const { fetchPrice } = this.props;
    fetchPrice();
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  setGuestWrapperRef(node) {
    this.wrapperGuestRef = node;
  }

  handleOutsideClick(event) {
    const { toggleCalendarsOff } = this.props;
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      toggleCalendarsOff();
    }
  }

  handleOutsideGuestClick(event) {
    const { toggleGuestInfoOff } = this.props;
    if (this.wrapperGuestRef && !this.wrapperGuestRef.contains(event.target)) {
      toggleGuestInfoOff();
    }
  }

  render() {
    const { checkin, checkout, guestInfo } = this.props;
    return (
      <div>
        <div id="module-container">
          <div id="module-container-2">
            <PriceAndRatingContainer />
            <CheckInContainer />
            <div ref={this.setWrapperRef}>
              {checkin ? <Calendar /> : null}
              {checkout ? <Calendar /> : null}
            </div>
            <GuestsContainer />
            <div ref={this.setGuestWrapperRef}>
              {guestInfo ? <GuestsInfo /> : null}
            </div>
            <div>
              <button type="submit" className="reserve-button"><span><div>Reserve</div></span></button>
            </div>
            <div className="small-text center-text">
              <span>You won’t be charged yet</span>
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

const mapStateToProps = (state) => {
  console.log('lol', state);
  return ({
    checkin: state.toggleCalendar.checkin,
    checkout: state.toggleCalendar.checkout,
    guestInfo: state.toggleGuestInfo,
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchPrice: () => { dispatch(fetchPriceAction()); },
  toggleCalendarsOff: () => { dispatch(popupCalendarActions.toggleCalendarsOff()); },
  toggleGuestInfoOff: () => { dispatch(toggleGuestInfo.toggleGuestInfoOff()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
