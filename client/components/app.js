/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import fetchPriceAction from '../actions/pricesAction';
import toggleGuestInfo from '../actions/popupGuestsActions';
import popupCalendarActions from '../actions/popupCalendarActions';
import PriceAndRatingContainer from '../containers/priceAndRatingContainer';
import CheckInContainer from '../containers/checkInContainer';
import GuestsInfoContainer from '../containers/guestsInfoContainer';
import CalendarContainer from '../containers/calendarContainer';
import GuestsContainer from '../containers/guestsContainer';
import CalendarOutContainer from '../containers/calendarOutContainer';
import FeesContainer from '../containers/feesContainer';

const ModuleContainer = styled.div`
  margin-left: 45px;
  width: 376px;
  z-index: 3;
  margin-top: 32px;
`;

const ModuleContainerInner = styled.div`
  padding: 24px;
  padding-top: 16px;
  border: 1px solid lightgrey;
`;

const ReserveButton = styled.button`
  margin-top: 24px;
  display: inline-block;
  position: relative;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: normal;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: 500;
  padding-left: 22px;
  padding-right: 22px;
  min-width: 71.1935px;
  box-shadow: none;
  color: rgb(255, 255, 255);
  text-decoration: none;
  border-radius: 4px;
  border-width: 2px;
  border-style: solid;
  background: rgb(255, 90, 95);
  border-color: transparent;
`;

ReserveButton.displayName = 'ReserveButton';

const SmallCenteredText = styled.div`
  font-size: 12px;
  font-weight: 500;
  margin-top: 10px;
  text-align: center;
`;

SmallCenteredText.displayName = 'SmallCenteredText';

const Body = styled.div`
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  font-size: 14px;
  color: #484848;
`;

export class App extends React.Component {
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
      <Body>
        <ModuleContainer>
          <ModuleContainerInner>
            <PriceAndRatingContainer />
            <CheckInContainer />
            <div ref={this.setWrapperRef}>
              {checkin ? <CalendarContainer /> : null}
              {checkout ? <CalendarOutContainer /> : null}
            </div>
            <GuestsContainer />
            <div ref={this.setGuestWrapperRef}>
              {guestInfo ? <GuestsInfoContainer /> : null}
            </div>
            <div>
              <FeesContainer />
            </div>
            <div>
              <ReserveButton><span><div>Reserve</div></span></ReserveButton>
            </div>
            <SmallCenteredText>
              <span>You won't be charged yet</span>
            </SmallCenteredText>
          </ModuleContainerInner>
        </ModuleContainer>
      </Body>
    );
  }
}

App.propTypes = {
  checkin: PropTypes.bool.isRequired,
  checkout: PropTypes.bool.isRequired,
  guestInfo: PropTypes.objectOf.isRequired,
  fetchPrice: PropTypes.func.isRequired,
  toggleCalendarsOff: PropTypes.func.isRequired,
  toggleGuestInfoOff: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  checkin: state.toggleCalendar.checkin,
  checkout: state.toggleCalendar.checkout,
  guestInfo: state.toggleGuestInfo,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPrice: () => { dispatch(fetchPriceAction()); },
  toggleCalendarsOff: () => { dispatch(popupCalendarActions.toggleCalendarsOff()); },
  toggleGuestInfoOff: () => { dispatch(toggleGuestInfo.toggleGuestInfoOff()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
