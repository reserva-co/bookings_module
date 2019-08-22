import React from 'react';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.data = {
      startDay: '4',
      numberOfDays: 31,
      currentMonth: (new Date()).getMonth(),
      currentDate: (new Date()).getDate()
    }
  };

  render() {
    var output = [];
    var month;

    for (var i = 0; i < this.data.startDay; i++) {
      output.push(<div key={`e${i}`}className="empty-box"></div>)
    }
    for (var i = 0; i < this.data.currentDate; i++) {
      output.push(<div key={`${i}`} className="date-box booked">{i}</div>)
    }
    for (; i < this.data.numberOfDays; i++) {
      output.push(<div key={`${i}`} className="date-box hoverable">{i}</div>)
    }

    switch(this.data.currentMonth) {
      case (1): month = 'Jan'; break;
      case (2): month = 'Feb'; break;
      case (3): month = 'Mar'; break;
      case (4): month = 'Apr'; break;
      case (5): month = 'May'; break;
      case (6): month = 'Jun'; break;
      case (7): month = 'Jul'; break;
      case (8): month = 'Aug'; break;
      case (9): month = 'Sep'; break;
      case (10): month = 'Oct'; break;
      case (11): month = 'Nov'; break;
      case (12): month = 'Dec'; break;
    }

    return (
      <div id="dates-container">
        {month}
        <div id="calendar-container">
          {output}
        </div>
      </div>
    )
  }
}

export default Calendar;