/* eslint-disable react/jsx-filename-extension */
import React from 'react';

const GuestsInfo = () => (
  <div className="popup">
    <div className="popup\_inner">
      <div id="guests-info-container">
        <div id="guests-info-container2">
          <div className="guests-info-section">
            <div className="column">Adults</div>
            <div className="guests-buttons">
              <button type="button" className="plus-minus-button" aria-busy="false"><span className="_1y1icpxd"><svg viewBox="0 0 24 24" role="img" aria-label="subtract" focusable="false"><rect height="2" rx="1" width="12" x="6" y="11" /></svg></span></button>
              <span className="num-guests">1</span>
              <button className="plus-minus-button" type="button" aria-busy="false">
                <span className="_1y1icpxd">
                  <svg viewBox="0 0 24 24" role="img" aria-label="add" focusable="false">
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
              <button type="button" className="plus-minus-button" aria-busy="false"><span className="_1y1icpxd"><svg viewBox="0 0 24 24" role="img" aria-label="subtract" focusable="false"><rect height="2" rx="1" width="12" x="6" y="11" /></svg></span></button>
              <span className="num-guests">1</span>
              <button className="plus-minus-button" type="button" aria-busy="false">
                <span className="_1y1icpxd">
                  <svg viewBox="0 0 24 24" role="img" aria-label="add" focusable="false">
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
              <button type="button" className="plus-minus-button" aria-busy="false"><span className="_1y1icpxd"><svg viewBox="0 0 24 24" role="img" aria-label="subtract" focusable="false"><rect height="2" rx="1" width="12" x="6" y="11" /></svg></span></button>
              <span className="num-guests">1</span>
              <button className="plus-minus-button" type="button" aria-busy="false">
                <span className="_1y1icpxd">
                  <svg viewBox="0 0 24 24" role="img" aria-label="add" focusable="false">
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

export default GuestsInfo;
