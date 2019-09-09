import { get } from 'axios';

export default function fetchReservations() {
  return (dispatch) => {
    get('/api/reservations')
      .then((reserved) => dispatch({
        type: 'FETCH_RESERVATIONS',
        payload: reserved,
      }));
  };
}
