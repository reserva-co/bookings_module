/* eslint-disable react/jsx-filename-extension */

import React from 'react';

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
    };
    this.onNext = this.onNext.bind(this);
    this.onPrevious = this.onPrevious.bind(this);
  }

  onNext() {
    const { currentMonth } = this.state;
    if (currentMonth === 11) {
      this.date.currentMonth = 0;
      this.date.currentYear += 1;
      this.setState({
        currentMonth: this.date.currentMonth,
        currentYear: this.date.currentYear,
        startDay: new Date(`${this.date.currentYear}-${this.date.currentMonth + 1}-01`).getDay(),
        numberOfDays: new Date(this.date.currentYear, this.date.currentMonth, 0).getDate(),
      });
    } else {
      this.date.currentMonth += 1;
      this.setState({
        currentMonth: this.date.currentMonth,
        startDay: new Date(`${this.date.currentYear}-${this.date.currentMonth + 1}-01`).getDay(),
        numberOfDays: new Date(this.date.currentYear, this.date.currentMonth, 0).getDate(),
      });
    }
  }

  onPrevious() {
    const { currentMonth } = this.state;
    if (currentMonth === 0) {
      this.date.currentMonth = 11;
      this.date.currentYear -= 1;
      this.setState({
        currentMonth: this.date.currentMonth,
        currentYear: this.date.currentYear,
        startDay: new Date(`${this.date.currentYear}-${this.date.currentMonth + 1}-01`).getDay(),
        numberOfDays: new Date(this.date.currentYear, this.date.currentMonth, 0).getDate(),
      });
    } else {
      this.date.currentMonth -= 1;
      this.setState({
        currentMonth: this.date.currentMonth,
        startDay: new Date(`${this.date.currentYear}-${this.date.currentMonth + 1}-01`).getDay(),
        numberOfDays: new Date(this.date.currentYear, this.date.currentMonth, 0).getDate(),
      });
    }
  }

  render() {
    const {
      startDay, currentYear, currentMonth, numberOfDays, currentDate,
    } = this.state;
    const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    const output = [];
    let month;

    for (let i = 0; i < 7; i += 1) {
      output.push(<div key={`d${i}`} className="day-box">{daysOfWeek[i]}</div>);
    }
    for (let i = 0; i < startDay; i += 1) {
      output.push(<div key={`e${i}`} className="empty-box" />);
    }

    if (currentYear === new Date().getFullYear()) {
      if (currentMonth > new Date().getMonth()) {
        for (let i = 0; i < numberOfDays; i += 1) {
          output.push(<div key={`${i + 1}`} className="date-box hoverable">{i + 1}</div>);
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
          output.push(<div key={`${i + 1}`} className="date-box hoverable">{i + 1}</div>);
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
      case (0): month = 'January'; break;
      case (1): month = 'Febuary'; break;
      case (2): month = 'March'; break;
      case (3): month = 'April'; break;
      case (4): month = 'May'; break;
      case (5): month = 'June'; break;
      case (6): month = 'July'; break;
      case (7): month = 'August'; break;
      case (8): month = 'September'; break;
      case (9): month = 'October'; break;
      case (10): month = 'November'; break;
      case (11): month = 'December'; break;
      default: month = 'Random';
    }

    return (
      <div id="big-container">
        <div id="buttons-and-month">
          <span><button type="button" onClick={this.onPrevious}>back</button></span>
          <span id="month-name">
            {month}
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
