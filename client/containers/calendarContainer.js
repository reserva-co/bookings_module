import { connect } from 'react-redux';
import Calendar from '../components/calendar';
import calendarActions from '../actions/calendarActions';
import popupCalendarActions from '../actions/popupCalendarActions';

const mapStateToProps = (state) => ({
  checkInDate: state.calendar.checkInDate,
  checkOutDate: state.calendar.checkOutDate,
});

const mapDispatchToProps = (dispatch) => ({
  clearDates: () => {
    dispatch(calendarActions.clearDates());
  },
  getCheckInDate: (month, day, year) => {
    dispatch(calendarActions.getCheckInDate(month, day, year));
  },
  getCheckOutDate: (month, day, year) => {
    dispatch(calendarActions.getCheckOutDate(month, day, year));
  },
  toggleCheckInOn: () => { dispatch(popupCalendarActions.toggleCheckInOn()); },
  toggleCheckOutOn: () => { dispatch(popupCalendarActions.toggleCheckOutOn()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
