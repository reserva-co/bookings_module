const toggleCheckInOn = () => ({
  type: 'TOGGLE_CHECKIN_ON',
});

const toggleCheckOutOn = () => ({
  type: 'TOGGLE_CHECKOUT_ON',
});

const toggleCalendarsOff = () => ({
  type: 'TOGGLE_CALENDARS_OFF',
});

export default {
  toggleCheckInOn,
  toggleCheckOutOn,
  toggleCalendarsOff,
};
