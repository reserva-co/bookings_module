import axios from 'axios';

export default function fetchPrice(id) {
  return (dispatch) => {
    axios.get(`http://localhost:3003/api/reservations/prices/${id}`)
      .then((costs) => {
        console.log(costs);
        dispatch({
          type: 'FETCH_PRICE',
          payload: costs.data,
        });
      });
  };
}
