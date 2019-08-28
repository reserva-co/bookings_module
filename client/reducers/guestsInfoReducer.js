const initialState = {
  adults: 2,
  children: 0,
  infants: 0,
};

const guestsInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ADULT':
      return {
        ...state,
        adults: state.adults + 1,
      };
    case 'SUBTRACT_ADULT':
      return {
        ...state,
        adults: state.adults - 1,
      };
    case 'ADD_CHILD':
      return {
        ...state,
        children: state.children + 1,
      };
    case 'SUBTRACT_CHILD':
      return {
        ...state,
        children: state.children - 1,
      };
    case 'ADD_INFANT':
      return {
        ...state,
        infants: state.infants + 1,
      };
    case 'SUBTRACT_INFANT':
      return {
        ...state,
        infants: state.infants - 1,
      };
    default:
      return state;
  }
};

export default guestsInfoReducer;
