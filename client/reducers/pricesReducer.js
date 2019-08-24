const initialState = {
  price: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PRICE':
      console.log('reducer');
      return {
        ...state,
        price: action.payload,
      };
    default:
      return state;
  }
}
