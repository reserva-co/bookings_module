import { combineReducers } from 'redux';
import calendarReducer from './calendarReducer';
import pricesReducer from './pricesReducer';

export default combineReducers({
  calendar: calendarReducer,
  price: pricesReducer,
});
