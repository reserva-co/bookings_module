import axios from 'axios';

export default function fetchPrice() {
  return (dispatch) => {
    axios.get('/api/reservations/prices')
      .then((price) => {
        console.log('price', price.data);
        dispatch({
          type: 'FETCH_PRICE',
          payload: price.data,
        });
      });
  };
}
