const initialState = {
  checkInDate: null,
  checkOutDate: null,
  mouseHoveredDate: null,
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
    case 'GET_MOUSE_HOVERED_DATE':
      return {
        ...state,
        mouseHoveredDate: {
          month: action.payload.month,
          day: action.payload.day,
          year: action.payload.year,
        },
      };
    case 'REMOVE_MOUSE_HOVERED_DATE':
      return {
        ...state,
        mouseHoveredDate: null,
      };
    case 'CLEAR_DATES':
      return {
        ...state,
        checkInDate: null,
        checkOutDate: null,
      };
    default:
      return state;
  }
}
