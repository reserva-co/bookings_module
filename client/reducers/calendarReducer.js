const initialState = {
  checkInDate: null,
  checkOutDate: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_CHECK_IN_DATE':
      return {
        ...state,
        checkInDate: {
          month: action.payload.month,
          day: action.payload.day,
          year: action.payload.year,
        },
      };
    case 'GET_CHECK_OUT_DATE':
      return {
        ...state,
        checkOutDate: {
          month: action.payload.month,
          day: action.payload.day,
          year: action.payload.year,
        },
      };
    default:
      return state;
  }
}
