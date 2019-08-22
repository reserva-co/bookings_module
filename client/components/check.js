import React from 'react';

var CheckIn = (props) => {
  return (
    <div>
      <span className="subtitle">Dates</span>
      <div id="dates-container">
        <span className="checkin-text">Check-In</span>
        <span> &#8594;</span>
        <span className="checkin-text">Check-out </span>
      </div>
      <span className="subtitle">Guests</span>
      <div id="guests-container">
      </div>
    </div>
  )
}

export default CheckIn;
