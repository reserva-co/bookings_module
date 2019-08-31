import axios from 'axios';

export default function fetchPrice(id) {
  return (dispatch) => {
    axios.get(`/api/reservations/prices/${id}`)
      .then((costs) => {
        dispatch({
          type: 'FETCH_PRICE',
          payload: costs.data,
        });
      });
  };
}
