import { connect } from 'react-redux';
import GuestsInfo from '../components/guestsInfo';
import guestsInfoActions from '../actions/guestsInfoActions';

const mapStateToProps = (state) => ({
  adults: state.guestsInfo.adults,
  children: state.guestsInfo.children,
  infants: state.guestsInfo.infants,
});

const mapDispatchToProps = (dispatch) => ({
  addAdult: () => { dispatch(guestsInfoActions.addAdult()); },
  subtractAdult: () => { dispatch(guestsInfoActions.subtractAdult()); },
  addChild: () => { dispatch(guestsInfoActions.addChild()); },
  subtractChild: () => { dispatch(guestsInfoActions.subtractChild()); },
  addInfant: () => { dispatch(guestsInfoActions.addInfant()); },
  subtractInfant: () => { dispatch(guestsInfoActions.subtractInfant()); },
});

export default connect(mapStateToProps, mapDispatchToProps)(GuestsInfo);
