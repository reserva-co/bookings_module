import { connect } from 'react-redux';
import CheckIn from '../components/checkin';
import popupCalendarActions from '../actions/popupCalendarActions';

const mapStateToProps = (state) => {
  console.log('poop', state);
  return ({
    checkin: state.toggleCalendar.checkin,
    checkout: state.toggleCalendar.checkout,
  });
};

const mapDispatchToProps = (dispatch) => ({
  toggleCheckIn: () => { dispatch(popupCalendarActions.toggleCheckIn()); },
  toggleCheckOut: () => { dispatch(popupCalendarActions.toggleCheckOut()); },
});

// gives fetchPrice to this.props in App

export default connect(mapStateToProps, mapDispatchToProps)(CheckIn);
