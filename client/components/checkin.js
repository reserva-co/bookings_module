/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';

const CheckIn = (props) => {
  const { toggleCheckInOn, toggleCheckOutOn } = props;
  return (
    <div>
      <span className="small-text">Dates</span>
      <div id="checkin-dates-container">
        <span className="checkin-text" onClick={toggleCheckInOn}>Check-In</span>
        <svg className="arrow" viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false"><path d="m0 12.5a.5.5 0 0 0 .5.5h21.79l-6.15 6.15a.5.5 0 1 0 .71.71l7-7v-.01a.5.5 0 0 0 .14-.35.5.5 0 0 0 -.14-.35v-.01l-7-7a .5.5 0 0 0 -.71.71l6.15 6.15h-21.79a.5.5 0 0 0 -.5.5z" fillRule="evenodd" /></svg>
        <span className="checkin-text" onClick={toggleCheckOutOn}>Check-out </span>
      </div>
    </div>
  );
};

export default CheckIn;
