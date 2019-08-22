import React from 'react';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.data = {
      startDay: '4',
      numberOfDays: 31,
      currentMonth: (new Date()).getMonth(),
      currentDate: (new Date()).getDate(),
      currentYear: (new Date()).getFullYear()
    }
  };

  render() {
    var daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    var output = [];
    var month;
    for (var i = 0; i < 7; i++) {
      output.push(<div key={`d${i}`} className="day-box">{daysOfWeek[i]}</div>)
    }
    for (var i = 0; i < this.data.startDay; i++) {
      output.push(<div key={`e${i}`} className="empty-box"></div>)
    }
    for (var i = 0; i < this.data.currentDate; i++) {
      output.push(<div key={`${i}`} className="date-box booked">{i}</div>)
    }
    for (; i < this.data.numberOfDays; i++) {
      output.push(<div key={`${i}`} className="date-box hoverable">{i}</div>)
    }

    switch(this.data.currentMonth) {
      case (1): month = 'January'; break;
      case (2): month = 'Febuary'; break;
      case (3): month = 'March'; break;
      case (4): month = 'April'; break;
      case (5): month = 'May'; break;
      case (6): month = 'June'; break;
      case (7): month = 'July'; break;
      case (8): month = 'August'; break;
      case (9): month = 'September'; break;
      case (10): month = 'October'; break;
      case (11): month = 'November'; break;
      case (12): month = 'December'; break;
    }

    return (
      <div id="big-container">
        <div id="buttons-and-month">
          <span><button>back</button></span>
          <span id="month-name">{month} {this.data.currentYear}</span>
          <span><button>next</button></span>
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