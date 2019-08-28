import { connect } from 'react-redux';
import Guests from '../components/guests';
import popupGuestsActions from '../actions/popupGuestsActions';

// const mapStateToProps = (state) => ({
//   checkin: state.toggleCalendar.checkin,
//   checkout: state.toggleCalendar.checkout,
// });

const mapDispatchToProps = (dispatch) => ({
  toggleGuestInfoOn: () => { dispatch(popupGuestsActions.toggleGuestInfoOn()); },
});

// gives fetchPrice to this.props in App

export default connect(null, mapDispatchToProps)(Guests);
