const getCheckInDate = (month, day, year) => ({
  type: 'GET_CHECK_IN_DATE',
  payload: { month, day, year },
});

const getCheckOutDate = (month, day, year) => ({
  type: 'GET_CHECK_OUT_DATE',
  payload: { month, day, year },
});

const getMouseHoveredDate = (month, day, year) => ({
  type: 'GET_MOUSE_HOVERED_DATE',
  payload: { month, day, year },
});

const removeMouseHoveredDate = () => ({
  type: 'REMOVE_MOUSE_HOVERED_DATE',
});

const clearDates = () => ({
  type: 'CLEAR_DATES',
});

export default {
  getCheckInDate,
  getCheckOutDate,
  getMouseHoveredDate,
  removeMouseHoveredDate,
  clearDates,
};
