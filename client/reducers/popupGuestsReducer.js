const popupGuestsReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_GUEST_INFO_ON':
      return true;
    case 'TOGGLE_GUEST_INFO_OFF':
      return false;
    default:
      return state;
  }
};

export default popupGuestsReducer;
