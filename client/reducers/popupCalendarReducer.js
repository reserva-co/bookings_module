const initialState = {
  checkin: false,
  checkout: false,
};

const popupCalendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_CHECKIN_ON':
      return {
        checkin: true,
        checkout: false,
      };
    case 'TOGGLE_CHECKOUT_ON':
      return {
        checkin: false,
        checkout: true,
      };
    case 'TOGGLE_CALENDARS_OFF':
      return {
        checkin: false,
        checkout: false,
      };
    default:
      return state;
  }
};

export default popupCalendarReducer;
