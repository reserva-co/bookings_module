const initialState = {
  price: null,
  rating: null,
  numberOfReviews: null,
  cleaningFee: null,
  serviceFee: null,
  views: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PRICE':
      return {
        ...state,
        price: action.payload.price,
        rating: action.payload.rating,
        numberOfReviews: action.payload.numberOfReviews,
        serviceFee: action.payload.serviceFee,
        cleaningFee: action.payload.cleaningFee,
        views: action.payload.views,
      };
    default:
      return state;
  }
}
