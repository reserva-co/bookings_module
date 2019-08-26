import { combineReducers } from 'redux';
import calendarReducer from './calendarReducer';
import pricesReducer from './pricesReducer';

export default combineReducers({
  calendar: calendarReducer,
  costs: pricesReducer,
});

// these are the states (state.calendar, state.price) that is given to everything,
// that you use in mapStateToProps
