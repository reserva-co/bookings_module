import React from 'react';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.date = {
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear()
    }
    this.state = {
      currentDate: new Date().getDate(),
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      startDay: new Date(this.date.currentYear + "-" + (this.date.currentMonth+1) + "-01").getDay(),
      numberOfDays: new Date(this.date.currentYear, this.date.currentMonth, 0).getDate(),
    }
    this.onNext = this.onNext.bind(this);
    this.onPrevious = this.onPrevious.bind(this);
  };

  onNext() {
    if (this.state.currentMonth === 11) {
      this.date.currentMonth = 0;
      this.date.currentYear++;
      this.setState({currentMonth: this.date.currentMonth,
        currentYear: this.date.currentYear,
        startDay: new Date(this.date.currentYear + "-" + (this.date.currentMonth + 1) + "-01").getDay(),
        numberOfDays: new Date(this.date.currentYear, this.date.currentMonth, 0).getDate()
      });
    } else {
      this.date.currentMonth++;
      this.setState({currentMonth: this.date.currentMonth,
        startDay: new Date(this.date.currentYear + "-" + (this.date.currentMonth + 1) + "-01").getDay(),
        numberOfDays: new Date(this.date.currentYear, this.date.currentMonth, 0).getDate()
      });
    }
  }

  onPrevious() {
    if (this.state.currentMonth === 0) {
      this.date.currentMonth = 11;
      this.date.currentYear--;
      this.setState({ currentMonth: this.date.currentMonth,
        currentYear: this.date.currentYear,
        startDay: new Date(this.date.currentYear + "-" + (this.date.currentMonth + 1) + "-01").getDay(),
        numberOfDays: new Date(this.date.currentYear, this.date.currentMonth, 0).getDate()
      });
    } else {
      this.date.currentMonth--;
      this.setState({ currentMonth: this.date.currentMonth,
        startDay: new Date(this.date.currentYear + "-" + (this.date.currentMonth + 1) + "-01").getDay(),
        numberOfDays: new Date(this.date.currentYear, this.date.currentMonth, 0).getDate()
      });
    }
  }

  render() {
    var daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    var output = [];
    var month;
    
    for (var i = 0; i < 7; i++) {
      output.push(<div key={`d${i}`} className="day-box">{daysOfWeek[i]}</div>)
    }
    for (var i = 0; i < this.state.startDay; i++) {
      output.push(<div key={`e${i}`} className="empty-box"></div>)
    }
    
    if (this.state.currentYear === new Date().getFullYear()) {
      if (this.state.currentMonth > new Date().getMonth()) {
        for (var i = 0; i < this.state.numberOfDays; i++) {
          output.push(<div key={`${i}`} className="date-box hoverable">{i}</div>)
        }
      } else if (this.state.currentMonth < new Date().getMonth()) {
        for (var i = 0; i < this.state.numberOfDays; i++) {
          output.push(<div key={`${i}`} className="date-box booked">{i}</div>)
        }
      } else {
        for (var i = 0; i < this.state.currentDate; i++) {
          output.push(<div key={`${i}`} className="date-box booked">{i}</div>)
        }
        for (; i < this.state.numberOfDays; i++) {
          output.push(<div key={`${i}`} className="date-box hoverable">{i}</div>)
        }
      }
    } else if (this.state.currentYear > new Date().getFullYear()) {
      for (var i = 0; i < this.state.numberOfDays; i++) {
        output.push(<div key={`${i}`} className="date-box hoverable">{i}</div>)
      }
    } else {
      for (var i = 0; i < this.state.numberOfDays; i++) {
        output.push(<div key={`${i}`} className="date-box booked">{i}</div>)
      }
    }

    switch(this.state.currentMonth) {
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
    }

    return (
      <div id="big-container">
        <div id="buttons-and-month">
          <span><button onClick={this.onPrevious}>back</button></span>
          <span id="month-name">{month} {this.state.currentYear}</span>
          <span><button onClick={this.onNext}>next</button></span>
        </div>
        <div id="dates-container">
          <div id="calendar-container">
            {output}
          </div>
        </div>
      </div>
    )
  }
}

export default Calendar;