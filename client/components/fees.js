/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LineBreak = styled.hr`
  height: 1px;
  color: lightgrey;
  background-color: lightgrey;
  border: none;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const FeesSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FeesSectionFirst = styled(FeesSection)`
  margin-top: 30px;
`;

const TotalSection = styled(FeesSection)`
  section
`;

const Fees = (props) => {
  const {
    price, cleaningFee, serviceFee, checkInDate, checkOutDate,
  } = props;

  if (checkInDate && checkOutDate) {
    return (
      <div>
        <FeesSectionFirst>
          <span>
          $
            {price}
            {' '}
            x
            {' '}
            {checkOutDate.day - checkInDate.day}
            {' '}
            night
            {(checkOutDate.day - checkInDate.day) > 1 ? 's' : ''}
          </span>
          <span>
          $
            {price * (checkOutDate.day - checkInDate.day)}
          </span>
        </FeesSectionFirst>
        <LineBreak />
        <FeesSection>
          <span>Cleaning fee</span>
          <span>
          $
            {cleaningFee}
          </span>
        </FeesSection>
        <LineBreak />
        <FeesSection>
          <span>Service fees</span>
          <span>
          $
            {serviceFee}
          </span>
        </FeesSection>
        <LineBreak />
        <TotalSection>
          <span>Total</span>
          <span>
$
            {(price * (checkOutDate.day - checkInDate.day) + cleaningFee + serviceFee)}
          </span>
        </TotalSection>
      </div>
    );
  }
  return null;
};

Fees.propTypes = {
  price: PropTypes.number.isRequired,
  cleaningFee: PropTypes.number.isRequired,
  serviceFee: PropTypes.number.isRequired,
  checkInDate: PropTypes.objectOf.isRequired,
  checkOutDate: PropTypes.objectOf.isRequired,
};

export default Fees;
