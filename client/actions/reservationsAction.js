import axios from 'axios';

export default function fetchReservations() {
  return (dispatch) => {
    axios.get('/api/reservations')
      .then((reserved) => dispatch({
        type: 'FETCH_RESERVATIONS',
        payload: reserved,
      }));
  };
}
