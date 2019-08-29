import { connect } from 'react-redux';
import CalendarOut from '../components/calendarOut';
import calendarActions from '../actions/calendarActions';
import popupCalendarActions from '../actions/popupCalendarActions';

const mapStateToProps = (state) => ({
  checkInDate: state.calendar.checkInDate,
  checkOutDate: state.calendar.checkOutDate,
  mouseHoveredDate: state.calendar.mouseHoveredDate,
});

const mapDispatchToProps = (dispatch) => ({
  getCheckInDate: (month, day, year) => {
    dispatch(calendarActions.getCheckInDate(month, day, year));
  },
  getCheckOutDate: (month, day, year) => {
    dispatch(calendarActions.getCheckOutDate(month, day, year));
  },
  getMouseHoveredDate: (month, day, year) => {
    dispatch(calendarActions.getMouseHoveredDate(month, day, year));
  },
  removeMouseHoveredDate: () => {
    dispatch(calendarActions.removeMouseHoveredDate());
  },
  toggleCheckInOn: () => { dispatch(popupCalendarActions.toggleCheckInOn()); },
  toggleCheckOutOn: () => { dispatch(popupCalendarActions.toggleCheckOutOn()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarOut);
