const date = {
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
};

const initialState = {
  currentDate: new Date().getDate(),
  currentMonth: new Date().getMonth(),
  currentYear: new Date().getFullYear(),
  startDay: new Date(`${date.currentYear}-${date.currentMonth + 1}-01`).getDay(),
  numberOfDays: new Date(date.currentYear, date.currentMonth, 0).getDate(),
};


const onNext = (state) => {
  const { currentMonth } = state;
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
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'NEXT_MONTH':
      return {
        ...state,
        currentMonth: action.payload.currentMonth,
        currentYear: action.payload.currentYear,
        startDay: action.payload.startDay,
        numberOfDays: action.payload.numberOfDays,
      };
    default:
      return state;
  }
}
