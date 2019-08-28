/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

const Guests = (props) => {
  const { toggleGuestInfoOn } = props;
  return (
    <div onClick={toggleGuestInfoOn}>
      <span className="small-text">Guests</span>
      <div id="guests-container">
        <span className="guests-text">2 Guests</span>
        <svg id="dropdown-arrow" viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false">
          <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
};

export default Guests;
