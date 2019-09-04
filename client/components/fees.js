/* eslint-disable react/jsx-filename-extension */
import React from 'react';
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

FeesSection.displayName = 'FeesSection';

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
  price: PropTypes.number,
  cleaningFee: PropTypes.number,
  serviceFee: PropTypes.number,
  checkInDate: PropTypes.shape({
    month: PropTypes.number,
    day: PropTypes.string,
    year: PropTypes.number,
  }),
  checkOutDate: PropTypes.shape({
    month: PropTypes.number,
    day: PropTypes.string,
    year: PropTypes.number,
  }),
};

Fees.defaultProps = {
  price: null,
  cleaningFee: null,
  serviceFee: null,
  checkInDate: null,
  checkOutDate: null,
};

export default Fees;
