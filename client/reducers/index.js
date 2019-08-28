import { combineReducers } from 'redux';
import calendarReducer from './calendarReducer';
import pricesReducer from './pricesReducer';
import popupCalendarReducer from './popupCalendarReducer';
import popupGuestsReducer from './popupGuestsReducer';
import guestsInfoReducer from './guestsInfoReducer';

export default combineReducers({
  calendar: calendarReducer,
  costs: pricesReducer,
  toggleCalendar: popupCalendarReducer,
  toggleGuestInfo: popupGuestsReducer,
  guestsInfo: guestsInfoReducer,
});

// these are the states (state.calendar, state.price) that is given to everything,
// that you use in mapStateToProps
