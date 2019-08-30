/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const CheckIn = (props) => {
  const {
    toggleCheckInOn, toggleCheckOutOn,
    checkInDate, checkOutDate, checkin, checkout,
  } = props;

  const SmallText = styled.span`
    font-size: 12px;
    font-weight: 500;
  `;

  SmallText.displayName = 'CheckInSmallText';

  const CheckInDatesContainer = styled.div`
    display:flex;
    align-content: center;
    justify-content: center;
    width: auto;
    border: 1px solid lightgrey;
    margin-bottom: 10px;
  `;

  const Arrow = styled.svg`
    height: 24px;
    width: 24px;
    display: block;
    fill: currentcolor;
    position: relative;
    top: 4px;
  `;

  const CheckInText = styled.span`
    display: inline-block;
    vertical-align: middle;
    font-weight: normal;
    font-size: 17px;
    color: grey;
    width: 40%;
    padding: 8px;
    background-color: ${checkin ? 'rgb(153, 237, 230)' : 'white'};
  `;

  CheckInText.displayName = 'CheckInText';

  const CheckOutText = styled(CheckInText)`
    background-color: ${checkout ? 'rgb(153, 237, 230)' : 'white'};
  `;

  CheckOutText.displayName = 'CheckOutText';

  return (
    <div>
      <SmallText>Dates</SmallText>
      <CheckInDatesContainer>
        <CheckInText onClick={toggleCheckInOn}>{checkInDate ? `${JSON.stringify(checkInDate.month).padStart(2, '0')}/${checkInDate.day.padStart(2, '0')}/${checkInDate.year}` : 'Check In'}</CheckInText>
        <Arrow viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="m0 12.5a.5.5 0 0 0 .5.5h21.79l-6.15 6.15a.5.5 0 1 0 .71.71l7-7v-.01a.5.5 0 0 0 .14-.35.5.5 0 0 0 -.14-.35v-.01l-7-7a .5.5 0 0 0 -.71.71l6.15 6.15h-21.79a.5.5 0 0 0 -.5.5z" fillRule="evenodd" /></Arrow>
        <CheckOutText onClick={toggleCheckOutOn}>{checkOutDate ? `${JSON.stringify(checkOutDate.month).padStart(2, '0')}/${checkOutDate.day.padStart(2, '0')}/${checkOutDate.year}` : 'Check Out'}</CheckOutText>
      </CheckInDatesContainer>
    </div>
  );
};

CheckIn.propTypes = {
  checkout: PropTypes.bool.isRequired,
  checkin: PropTypes.bool.isRequired,
  checkOutDate: PropTypes.func.isRequired,
  checkInDate: PropTypes.func.isRequired,
  toggleCheckInOn: PropTypes.func.isRequired,
  toggleCheckOutOn: PropTypes.func.isRequired,
};

export default CheckIn;
