/* eslint-disable react/jsx-filename-extension */
import React from 'react';

const GuestsInfo = (props) => {
  const {
    adults, children, infants,
    addAdult, addChild, addInfant,
    subtractAdult, subtractChild, subtractInfant,
  } = props;
  return (
    <div className="popup">
      <div className="popup\_inner">
        <div id="guests-info-container">
          <div id="guests-info-container2">
            <div className="guests-info-section">
              <div className="column">Adults</div>
              <div className="guests-buttons">
                <button type="button" className="plus-minus-button" onClick={subtractAdult}><span><svg viewBox="0 0 24 24" role="img" aria-label="subtract"><rect height="2" rx="1" width="12" x="6" y="11" /></svg></span></button>
                <span className="num-guests">{adults}</span>
                <button type="button" className="plus-minus-button" onClick={addAdult}>
                  <span>
                    <svg viewBox="0 0 24 24" role="img">
                      <rect height="2" rx="1" width="12" x="6" y="11" />
                      <rect height="12" rx="1" width="2" x="11" y="6" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="guests-info-section">
              <div className="column">
                <span>Children</span>
                <span className="subtitle description">Ages 2-12</span>
              </div>
              <div className="guests-buttons">
                <button type="button" className="plus-minus-button" onClick={subtractChild}><span><svg viewBox="0 0 24 24" role="img" aria-label="subtract"><rect height="2" rx="1" width="12" x="6" y="11" /></svg></span></button>
                <span className="num-guests">{children}</span>
                <button type="button" className="plus-minus-button" onClick={addChild}>
                  <span>
                    <svg viewBox="0 0 24 24" role="img">
                      <rect height="2" rx="1" width="12" x="6" y="11" />
                      <rect height="12" rx="1" width="2" x="11" y="6" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="guests-info-section">
              <div className="column">
                <span>Infants</span>
                <span className="subtitle description">Under 2</span>
              </div>
              <div className="guests-buttons">
                <button type="button" className="plus-minus-button" onClick={subtractInfant}><span><svg viewBox="0 0 24 24" role="img" aria-label="subtract"><rect height="2" rx="1" width="12" x="6" y="11" /></svg></span></button>
                <span className="num-guests">{infants}</span>
                <button type="button" className="plus-minus-button" onClick={addInfant}>
                  <span>
                    <svg viewBox="0 0 24 24" role="img">
                      <rect height="2" rx="1" width="12" x="6" y="11" />
                      <rect height="12" rx="1" width="2" x="11" y="6" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="max-guests-info">
              <span>2 guests maximum. Infants don’t count toward the number of guests.</span>
              <div id="close-button">Close</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestsInfo;
