import axios from 'axios';

export default function fetchPrice() {
  return (dispatch) => {
    axios.get('/api/reservations/prices')
      .then((costs) => {
        console.log('costs', costs.data);
        dispatch({
          type: 'FETCH_PRICE',
          payload: costs.data,
        });
      });
  };
}
