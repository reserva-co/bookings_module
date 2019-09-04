/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';

const PriceAndRating = (props) => {
  const { price, rating, numberOfReviews } = props;
  const percentage = `${((rating / 5).toFixed(2)) * 100}%`;

  const PriceName = styled.span`
    font-size: 22px;
    font-weight: 600;
  `;

  PriceName.displayName = 'PriceName';

  const SmallText = styled.span`
    font-size: 12px;
    font-weight: 500;
  `;

  const Rating = styled.div`
    display: flex;
    margin-top: 1px;
  `;

  const StarRating = styled.div`
    unicode-bidi: bidi-override;
    color: grey;
    font-size: 10px;
    height: 10px;
    width: 50px;
    margin: 0;
    position: relative;
  `;

  const StarRatingTop = styled.div`
    color: #007D8C;
    padding: 0;
    position: absolute;
    z-index: 1;
    display: block;
    overflow: hidden;
    width: ${percentage}
  `;

  const StarRatingBottom = styled.div`
    padding: 0;
    display: block;
    z-index: 0;
  `;

  const LineBreak = styled.hr`
    height: 1px;
    color: lightgrey;
    background-color: lightgrey;
    border: none;
    margin-top: 16px;
    margin-bottom: 16px;
  `;


  return (
    <div>
      <span>
        <PriceName>
          <span>$</span>
          {price}
        </PriceName>
        {' '}
        <SmallText>per night</SmallText>
      </span>
      <br />
      <Rating>
        <StarRating>
          <StarRatingTop>
          ★★★★★
          </StarRatingTop>
          <StarRatingBottom>
          ★★★★★
          </StarRatingBottom>
        </StarRating>
        <SmallText>{numberOfReviews}</SmallText>
      </Rating>
      <LineBreak />
    </div>
  );
};

PriceAndRating.propTypes = {
  price: PropTypes.number,
  rating: PropTypes.number,
  numberOfReviews: PropTypes.number,
};


PriceAndRating.defaultProps = {
  price: null,
  rating: null,
  numberOfReviews: null,
};

export default PriceAndRating;
