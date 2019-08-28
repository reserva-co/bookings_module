import { connect } from 'react-redux';
import Guests from '../components/guests';
import popupGuestsActions from '../actions/popupGuestsActions';

const mapStateToProps = (state) => ({
  adults: state.guestsInfo.adults,
  children: state.guestsInfo.children,
  infants: state.guestsInfo.infants,
});

const mapDispatchToProps = (dispatch) => ({
  toggleGuestInfoOn: () => { dispatch(popupGuestsActions.toggleGuestInfoOn()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Guests);
