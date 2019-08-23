/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import axios from 'axios';

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
      this.setState({
        month1: res.data.month1,
        month2: res.data.month2,
        month3: res.data.month3,
        month4: res.data.month4,
      });
    });
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
      output.push(<div key={`d${i}`} className="day-box">{daysOfWeek[i]}</div>);
    }
    for (let i = 0; i < startDay; i += 1) {
      output.push(<div key={`e${i}`} className="empty-box" />);
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
            output.push(<div key={`${i + 1}`} className="date-box booked">{i + 1}</div>);
          } else {
            output.push(<div key={`${i + 1}`} className="date-box hoverable">{i + 1}</div>);
          }
        }
      } else if (currentMonth < new Date().getMonth()) {
        for (let i = 0; i < numberOfDays; i += 1) {
          output.push(<div key={`${i + 1}`} className="date-box booked">{i + 1}</div>);
        }
      } else {
        let i = 0;
        for (; i < currentDate; i += 1) {
          output.push(<div key={`${i + 1}`} className="date-box booked">{i + 1}</div>);
        }
        for (; i < numberOfDays; i += 1) {
          if (month1.includes(i + 1)) {
            output.push(<div key={`${i + 1}`} className="date-box booked">{i + 1}</div>);
          } else {
            output.push(<div key={`${i + 1}`} className="date-box hoverable">{i + 1}</div>);
          }
        }
      }
    } else if (currentYear > new Date().getFullYear()) {
      for (let i = 0; i < numberOfDays; i += 1) {
        output.push(<div key={`${i + 1}`} className="date-box hoverable">{i + 1}</div>);
      }
    } else {
      for (let i = 0; i < numberOfDays; i += 1) {
        output.push(<div key={`${i + 1}`} className="date-box booked">{i + 1}</div>);
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
      <div id="big-container">
        <div id="buttons-and-month">
          <span><button type="button" onClick={this.onPrevious}>back</button></span>
          <span id="month-name">
            {monthName}
            {' '}
            {currentYear}
          </span>
          <span><button type="button" onClick={this.onNext}>next</button></span>
        </div>
        <div id="dates-container">
          <div id="calendar-container">
            {output}
          </div>
        </div>
      </div>
    );
  }
}

export default Calendar;
