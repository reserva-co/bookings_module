const initialState = {
  checkin: false,
  checkout: false,
};

const popupCalendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_CHECKIN':
      return {
        ...state,
        checkin: !state.checkin,
      };
    case 'TOGGLE_CHECKOUT':
      return {
        ...state,
        checkout: !state.checkout,
      };
    default:
      return state;
  }
};

export default popupCalendarReducer;
