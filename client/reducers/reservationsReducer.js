const initialState = {
  reserved: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_RESERVATIONS':
      return {
        ...state,
        reserved: action.payload,
      };
    default:
      return state;
  }
}
