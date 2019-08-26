/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-expressions */
import React from 'react';

const PriceAndRating = (props) => {
  const { price, rating } = props;
  const percentage = `${((rating / 5).toFixed(2)) * 100}%`;
  return (
    <div>
      <span>
        <span className="price-name">
          <span>$</span>
          {price}
        </span>
        {' '}
        <span className="small-text">per night</span>
      </span>
      <br />
      <div className="star-ratings-css">
        <div className="star-ratings-css-top" style={{ width: percentage }}>
        ★★★★★
        </div>
        <div className="star-ratings-css-bottom">
        ★★★★★
        </div>
      </div>
      <div className="linebreak">
        <hr />
      </div>
    </div>
  );
};

export default PriceAndRating;
