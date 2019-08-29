import { connect } from 'react-redux';
import CheckIn from '../components/checkin';
import popupCalendarActions from '../actions/popupCalendarActions';

const mapStateToProps = (state) => ({
  checkin: state.toggleCalendar.checkin,
  checkout: state.toggleCalendar.checkout,
  checkInDate: state.calendar.checkInDate,
  checkOutDate: state.calendar.checkOutDate,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCheckInOn: () => { dispatch(popupCalendarActions.toggleCheckInOn()); },
  toggleCheckOutOn: () => { dispatch(popupCalendarActions.toggleCheckOutOn()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckIn);
