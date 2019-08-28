/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';


const GuestsInfo = (props) => {
  const {
    adults, children, infants,
    addAdult, addChild, addInfant,
    subtractAdult, subtractChild, subtractInfant,
  } = props;

  const Popup = styled.div`
    position: absolute;  
    width: 335px;  
    height: auto;  
    background-color: white;
    z-index: 1;
  `;

  const PopupInner = styled.div`
    position: relative;  
    border-radius: 20px;  
    background: white;  
  `;

  const GuestsInfo = styled.div`
    width: 326px;
    box-sizing: border-box;
    border: 1px solid lightgrey;
    border-radius: 3px;
    background: white;
  `;
  const GuestsInfoInner = styled.div`
    margin-top: 12px;
    margin-bottom: 12px;
    padding-left: 10px;
  `;
  const GuestsInfoSection = styled.div`
    display: flex;
    font-size: 16px;
    font-weight: 600;
    text-align: left;
    padding: 10px;
  `;
  const AddSubtractButton = styled.button`
    height: 1em;
    width: 1em;
    display: block; 
    fill: currentcolor;
    display: inline-block;
    cursor: pointer;
    text-align: center;
    line-height: 1;
    position: relative;
    touch-action: manipulation;
    height: 32px;
    width: 32px;
    box-shadow: none;
    border-radius: 50%;
    border-style: solid;
    border-color: rgb(0, 132, 137);
    background: transparent;
    border-width: 1px;
  `;
  const NumberOfGuests = styled.div`
    padding: 5px
  `;
  const DescriptionColumn = styled.div`
    width: 50%;
  `;

  const GuestsButton = styled.div`
    width: 50%;
    display: flex;
    align-content: center;
    justify-content: space-around;
    margin-left: 20px;
  `;

  const SubtitleDescription = styled.div`
    display: block;
    font-size: 14px;
    font-weight: 400;
  `;

  const MaxGuestsInfo = styled.div`
    width: auto;
    padding: 10px;
    margin-top: 5px;
  `;

  const CloseButton = styled.div`
    font-size: 16px;
    font-weight: 500;
    margin-top: 15px;
    margin-right: 10px;
    text-align: right;
    color: #007D8C;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  `;

  return (
    <Popup>
      <PopupInner>
        <GuestsInfo>
          <GuestsInfoInner>
            <GuestsInfoSection>
              <DescriptionColumn>Adults</DescriptionColumn>
              <GuestsButton>
                <AddSubtractButton onClick={subtractAdult}><span><svg viewBox="0 0 24 24" role="img" aria-label="subtract"><rect height="2" rx="1" width="12" x="6" y="11" /></svg></span></AddSubtractButton>
                <NumberOfGuests>{adults}</NumberOfGuests>
                <AddSubtractButton onClick={addAdult}>
                  <span>
                    <svg viewBox="0 0 24 24" role="img">
                      <rect height="2" rx="1" width="12" x="6" y="11" />
                      <rect height="12" rx="1" width="2" x="11" y="6" />
                    </svg>
                  </span>
                </AddSubtractButton>
              </GuestsButton>
            </GuestsInfoSection>
            <GuestsInfoSection>
              <DescriptionColumn>
                <span>Children</span>
                <SubtitleDescription>Ages 2-12</SubtitleDescription>
              </DescriptionColumn>
              <GuestsButton>
                <AddSubtractButton onClick={subtractChild}><span><svg viewBox="0 0 24 24" role="img" aria-label="subtract"><rect height="2" rx="1" width="12" x="6" y="11" /></svg></span></AddSubtractButton>
                <NumberOfGuests>{children}</NumberOfGuests>
                <AddSubtractButton onClick={addChild}>
                  <span>
                    <svg viewBox="0 0 24 24" role="img">
                      <rect height="2" rx="1" width="12" x="6" y="11" />
                      <rect height="12" rx="1" width="2" x="11" y="6" />
                    </svg>
                  </span>
                </AddSubtractButton>
              </GuestsButton>
            </GuestsInfoSection>
            <GuestsInfoSection>
              <DescriptionColumn>
                <span>Infants</span>
                <span className="subtitle description">Under 2</span>
              </DescriptionColumn>
              <GuestsButton>
                <AddSubtractButton onClick={subtractInfant}><span><svg viewBox="0 0 24 24" role="img" aria-label="subtract"><rect height="2" rx="1" width="12" x="6" y="11" /></svg></span></AddSubtractButton>
                <NumberOfGuests>{infants}</NumberOfGuests>
                <AddSubtractButton onClick={addInfant}>
                  <span>
                    <svg viewBox="0 0 24 24" role="img">
                      <rect height="2" rx="1" width="12" x="6" y="11" />
                      <rect height="12" rx="1" width="2" x="11" y="6" />
                    </svg>
                  </span>
                </AddSubtractButton>
              </GuestsButton>
            </GuestsInfoSection>
            <MaxGuestsInfo>
              <span>2 guests maximum. Infants don’t count toward the number of guests.</span>
              <CloseButton>Close</CloseButton>
            </MaxGuestsInfo>
          </GuestsInfoInner>
        </GuestsInfo>
      </PopupInner>
    </Popup>
  );
};

export default GuestsInfo;
