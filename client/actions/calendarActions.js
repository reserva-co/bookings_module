const getCheckInDate = (month, day, year) => ({
  type: 'GET_CHECK_IN_DATE',
  payload: { month, day, year },
});

const getCheckOutDate = (month, day, year) => ({
  type: 'GET_CHECK_OUT_DATE',
  payload: { month, day, year },
});

export default {
  getCheckInDate,
  getCheckOutDate,
};
