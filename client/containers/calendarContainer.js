import { connect } from 'react-redux';
import Calendar from '../components/calendar';
import calendarActions from '../actions/calendarActions';

const mapStateToProps = (state) => ({
  checkInDate: state.calendar.checkInDate,
});

const mapDispatchToProps = (dispatch) => ({
  getCheckInDate: (month, day, year) => { dispatch(calendarActions(month, day, year)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
