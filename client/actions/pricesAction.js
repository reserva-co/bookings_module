import { get } from 'axios';

export default function fetchPrice(id) {
  return (dispatch) => {
    get(`http://54.153.79.78:3003/api/reservations/prices/${id}`)
      .then((costs) => {
        console.log(costs);
        dispatch({
          type: 'FETCH_PRICE',
          payload: costs.data,
        });
      });
  };
}
