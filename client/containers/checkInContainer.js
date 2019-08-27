import { connect } from 'react-redux';
import CheckIn from '../components/checkin';
import popupCalendarActions from '../actions/popupCalendarActions';

const mapStateToProps = (state) => ({
  checkin: state.toggleCalendar.checkin,
  checkout: state.toggleCalendar.checkout,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCheckInOn: () => { dispatch(popupCalendarActions.toggleCheckInOn()); },
  toggleCheckOutOn: () => { dispatch(popupCalendarActions.toggleCheckOutOn()); },
});

// gives fetchPrice to this.props in App

export default connect(mapStateToProps, mapDispatchToProps)(CheckIn);
