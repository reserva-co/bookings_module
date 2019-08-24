import axios from 'axios';

const fetchPrice = () => (dispatch) => {
  axios.get('/api/reservations/prices')
    .then((price) => dispatch({
      type: 'FETCH_PRICE',
      payload: price,
    }));
};

export default fetchPrice;
