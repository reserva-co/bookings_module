/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Guests = (props) => {
  const {
    toggleGuestInfoOn, adults, children, infants,
  } = props;

  const SmallText = styled.span`
    font-size: 12px;
    font-weight: 500;
  `;

  const GuestsContainer = styled.div`
    display:flex;
    justify-content: space-between;
    width: auto;
    border: 1px solid lightgrey;
  `;

  const GuestsText = styled.span`
    display: inline-block;
    vertical-align: middle;
    font-weight: normal;
    font-size: 17px;
    color: black;
    padding: 8px;
    margin-left: 3px;
  `;

  const DropdownArrow = styled.svg`
    height: 16px;
    width: 16px;
    display: inline-block;
    vertical-align: middle;
    fill: currentcolor;
    margin-top: 10px;
    margin-right:10px;
  `;

  return (
    <div onClick={toggleGuestInfoOn} role="presentation">
      <SmallText>Guests</SmallText>
      <GuestsContainer>
        <GuestsText>
          {adults + children}
          {' '}
Guests
          {infants > 0 ? `, ${infants} Infants` : null}
        </GuestsText>
        <DropdownArrow viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false">
          <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd" />
        </DropdownArrow>
      </GuestsContainer>
    </div>
  );
};

Guests.propTypes = {
  toggleGuestInfoOn: PropTypes.func.isRequired,
  adults: PropTypes.number.isRequired,
  children: PropTypes.number.isRequired,
  infants: PropTypes.number.isRequired,
};

export default Guests;
