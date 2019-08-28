/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

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

const BigContainer = styled.div`
  border: 1px solid lightgrey;
  text-align: center;
  width: 335px; 
`;

const ButtonAndMonthName = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

const NextPrevButton = styled.button`
  cursor: pointer;
  user-select: none;
  background-color: rgb(255, 255, 255);
  color: rgb(117, 117, 117);
  /* position: absolute; */
  top: 18px;
  line-height: 0.78;
  right: 22px;
  margin: 0px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(228, 231, 231);
  border-image: initial;
  border-radius: 3px;
  padding: 6px 9px;
`;

const NextPrevButtonSVG = styled.svg`
  height: 19px;
  width: 19px;
  fill: rgb(130, 136, 138);
  display: block;
`;

const MonthName = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const DatesContainer = styled.div`
  display:flex;
  align-content: center;
  justify-content: center;
  width: auto;
  box-sizing: border-box;
  color: #484848;
  margin-bottom: 16px;
`;

const CalendarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 301px;
`;

const DayBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 43px;
  margin-bottom: 2px;
  margin-top: 5px;
`;

const DateBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  width: 42px;
  height: 42px;
  border: 1px solid grey;
  margin-left: -1px;
  margin-bottom: -1px;
`;

const Booked = styled(DateBox)`
  color: lightgrey;
  text-decoration: line-through;
`;

const Hoverable = styled(DateBox)`
  :hover {
    background-color:rgba(0, 0, 0, 0.2);
  }
`;

const EmptyBox = styled.div`
  width: 42px;
  height: 42px;
  border: 1px solid transparent;
  margin-left: -1px;
  margin-bottom: -1px;
`;

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.date = {
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
    };
    this.state = {
      currentDate: new Date().getDate(),
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      startDay: new Date(`${this.date.currentYear}-${this.date.currentMonth + 1}-01`).getDay(),
      numberOfDays: new Date(this.date.currentYear, this.date.currentMonth, 0).getDate(),
      month1: [],
      month2: [],
      month3: [],
      month4: [],
    };
    this.onNext = this.onNext.bind(this);
    this.onPrevious = this.onPrevious.bind(this);
    this.setTheState = this.setTheState.bind(this);
  }

  componentDidMount() {
    axios.get('/api/reservations').then((res) => {
      console.log(JSON.stringify(res.data));
      this.setState({
        month1: res.data.month1,
        month2: res.data.month2,
        month3: res.data.month3,
        month4: res.data.month4,
      });
    })
      .catch(() => {});
  }

  onNext() {
    const { currentMonth } = this.state;
    if (currentMonth === 11) {
      this.date.currentMonth = 0;
      this.date.currentYear += 1;
      this.setTheState();
    } else {
      this.date.currentMonth += 1;
      this.setTheState();
    }
  }

  onPrevious() {
    const { currentMonth } = this.state;
    if (currentMonth === 0) {
      this.date.currentMonth = 11;
      this.date.currentYear -= 1;
      this.setTheState();
    } else {
      this.date.currentMonth -= 1;
      this.setTheState();
    }
  }

  // onDateClick(event) {
  //   console.lot(event.target);
  // }

  setTheState() {
    this.setState({
      currentMonth: this.date.currentMonth,
      currentYear: this.date.currentYear,
      startDay: new Date(`${this.date.currentYear}-${this.date.currentMonth + 1}-01`).getDay(),
      numberOfDays: new Date(this.date.currentYear, this.date.currentMonth, 0).getDate(),
    });
  }

  render() {
    const {
      startDay, currentYear, currentMonth, numberOfDays, currentDate,
      month1, month2, month3, month4,
    } = this.state;
    const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    const output = [];
    let monthName; let
      month;

    for (let i = 0; i < 7; i += 1) {
      output.push(<DayBox>{daysOfWeek[i]}</DayBox>);
    }
    for (let i = 0; i < startDay; i += 1) {
      output.push(<EmptyBox key={`e${i}`} />);
    }

    switch (currentMonth) {
      case (new Date().getMonth() + 1): month = month2; break;
      case (new Date().getMonth() + 2): month = month3; break;
      case (new Date().getMonth() + 3): month = month4; break;
      default: month = month1;
    }

    if (currentYear === new Date().getFullYear()) {
      if (currentMonth > new Date().getMonth()) {
        for (let i = 0; i < numberOfDays; i += 1) {
          if (month.includes(i + 1)) {
            output.push(<Booked>{i + 1}</Booked>);
          } else {
            output.push(<Hoverable>{i + 1}</Hoverable>);
          }
        }
      } else if (currentMonth < new Date().getMonth()) {
        for (let i = 0; i < numberOfDays; i += 1) {
          output.push(<Booked>{i + 1}</Booked>);
        }
      } else {
        let i = 0;
        for (; i < currentDate; i += 1) {
          output.push(<Booked>{i + 1}</Booked>);
        }
        for (; i < numberOfDays; i += 1) {
          if (month1.includes(i + 1)) {
            output.push(<Booked>{i + 1}</Booked>);
          } else {
            output.push(<Hoverable>{i + 1}</Hoverable>);
          }
        }
      }
    } else if (currentYear > new Date().getFullYear()) {
      for (let i = 0; i < numberOfDays; i += 1) {
        output.push(<Hoverable>{i + 1}</Hoverable>);
      }
    } else {
      for (let i = 0; i < numberOfDays; i += 1) {
        output.push(<Booked>{i + 1}</Booked>);
      }
    }

    switch (currentMonth) {
      case (0): monthName = 'January'; break;
      case (1): monthName = 'Febuary'; break;
      case (2): monthName = 'March'; break;
      case (3): monthName = 'April'; break;
      case (4): monthName = 'May'; break;
      case (5): monthName = 'June'; break;
      case (6): monthName = 'July'; break;
      case (7): monthName = 'August'; break;
      case (8): monthName = 'September'; break;
      case (9): monthName = 'October'; break;
      case (10): monthName = 'November'; break;
      case (11): monthName = 'December'; break;
      default: monthName = 'Random';
    }
    return (
      <Popup>
        <PopupInner>
          <BigContainer>
            <ButtonAndMonthName>
              <span><NextPrevButton onClick={this.onPrevious}><NextPrevButtonSVG focusable="false" viewBox="0 0 1000 1000"><path d="M336 275L126 485h806c13 0 23 10 23 23s-10 23-23 23H126l210 210c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7L55 524c-11-11-11-21 0-32l249-249c21-22 53 10 32 32z" /></NextPrevButtonSVG></NextPrevButton></span>
              <MonthName>
                {monthName}
                {' '}
                {currentYear}
              </MonthName>
              <span><NextPrevButton onClick={this.onNext}><NextPrevButtonSVG focusable="false" viewBox="0 0 1000 1000"><path d="M694 242l249 250c12 11 12 21 1 32L694 773c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210-210H68c-13 0-23-10-23-23s10-23 23-23h806L662 275c-21-22 11-54 32-33z" /></NextPrevButtonSVG></NextPrevButton></span>
            </ButtonAndMonthName>
            <DatesContainer>
              <CalendarContainer>
                {output}
              </CalendarContainer>
            </DatesContainer>
          </BigContainer>
        </PopupInner>
      </Popup>
    );
  }
}

export default Calendar;
