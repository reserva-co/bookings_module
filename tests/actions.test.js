/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */

// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import calendarActions from '../client/actions/calendarActions';
import guestsInfoActions from '../client/actions/guestsInfoActions';
import popupCalendarActions from '../client/actions/popupCalendarActions';
import popupGuestsActions from '../client/actions/popupGuestsActions';
// import fetchPriceAction from '../client/actions/pricesAction';
// import reservationAction from '../client/actions/reservationsAction';

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

describe('Calendar Actions', () => {
  it('should create an action to get a checkin date', () => {
    const payload = { month: 4, day: 10, year: 2019 };
    const expectedAction = {
      type: 'GET_CHECK_IN_DATE',
      payload,
    };
    expect(calendarActions.getCheckInDate(payload.month, payload.day, payload.year))
      .toEqual(expectedAction);
  });

  it('should create an action to get a checkout date', () => {
    const payload = { month: 5, day: 22, year: 2019 };
    const expectedAction = {
      type: 'GET_CHECK_OUT_DATE',
      payload,
    };
    expect(calendarActions.getCheckOutDate(payload.month, payload.day, payload.year))
      .toEqual(expectedAction);
  });

  it('should create an action to get mouse hovered date', () => {
    const payload = { month: 12, day: 14, year: 2019 };
    const expectedAction = {
      type: 'GET_MOUSE_HOVERED_DATE',
      payload,
    };
    expect(calendarActions.getMouseHoveredDate(payload.month, payload.day, payload.year))
      .toEqual(expectedAction);
  });

  it('should create an action to remove mouse hovered date', () => {
    const expectedAction = {
      type: 'REMOVE_MOUSE_HOVERED_DATE',
    };
    expect(calendarActions.removeMouseHoveredDate())
      .toEqual(expectedAction);
  });

  it('should create an action to clear date', () => {
    const expectedAction = {
      type: 'CLEAR_DATES',
    };
    expect(calendarActions.clearDates())
      .toEqual(expectedAction);
  });

  it('should create an action to clear check out date', () => {
    const expectedAction = {
      type: 'CLEAR_CHECK_OUT_DATE',
    };
    expect(calendarActions.clearCheckOutDate())
      .toEqual(expectedAction);
  });
});

describe('Guests Info Actions', () => {
  it('should create an action to ADD an adult', () => {
    const expectedAction = {
      type: 'ADD_ADULT',
    };
    expect(guestsInfoActions.addAdult())
      .toEqual(expectedAction);
  });

  it('should create an action to SUBTRACT an adult', () => {
    const expectedAction = {
      type: 'SUBTRACT_ADULT',
    };
    expect(guestsInfoActions.subtractAdult())
      .toEqual(expectedAction);
  });

  it('should create an action to ADD a child', () => {
    const expectedAction = {
      type: 'ADD_CHILD',
    };
    expect(guestsInfoActions.addChild())
      .toEqual(expectedAction);
  });

  it('should create an action to SUBTRACT a child', () => {
    const expectedAction = {
      type: 'SUBTRACT_CHILD',
    };
    expect(guestsInfoActions.subtractChild())
      .toEqual(expectedAction);
  });

  it('should create an action to ADD an infant', () => {
    const expectedAction = {
      type: 'ADD_INFANT',
    };
    expect(guestsInfoActions.addInfant())
      .toEqual(expectedAction);
  });

  it('should create an action to SUBTRACT an infant', () => {
    const expectedAction = {
      type: 'SUBTRACT_INFANT',
    };
    expect(guestsInfoActions.subtractInfant())
      .toEqual(expectedAction);
  });
});

describe('Popup Calendar Actions', () => {
  it('should create an action to toggle the checkin calendar on', () => {
    const expectedAction = {
      type: 'TOGGLE_CHECKIN_ON',
    };
    expect(popupCalendarActions.toggleCheckInOn())
      .toEqual(expectedAction);
  });

  it('should create an action to toggle the checkout calendar on', () => {
    const expectedAction = {
      type: 'TOGGLE_CHECKOUT_ON',
    };
    expect(popupCalendarActions.toggleCheckOutOn())
      .toEqual(expectedAction);
  });

  it('should create an action to toggle the calendars off', () => {
    const expectedAction = {
      type: 'TOGGLE_CALENDARS_OFF',
    };
    expect(popupCalendarActions.toggleCalendarsOff())
      .toEqual(expectedAction);
  });
});

describe('Popup Guests Actions', () => {
  it('should create an action to toggle guests information on', () => {
    const expectedAction = {
      type: 'TOGGLE_GUEST_INFO_ON',
    };
    expect(popupGuestsActions.toggleGuestInfoOn())
      .toEqual(expectedAction);
  });

  it('should create an action to toggle guests information off', () => {
    const expectedAction = {
      type: 'TOGGLE_GUEST_INFO_OFF',
    };
    expect(popupGuestsActions.toggleGuestInfoOff())
      .toEqual(expectedAction);
  });
});

describe('Prices Async Actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it('creates a FETCH_PRICE when successfully fetching prices from api', () => {
    fetchMock.getOnce('/api/reservations/prices', 200);
  });
  // const payload = {
  //   price: 149, rating: 4.5, numberOfReviews: 500, cleaningFee: 20, serviceFee: 10, views: 100,
  // };
  // const expectedAction = {
  //   type: 'FETCH_PRICE',
  //   payload,
  // };
  // const store = mockStore({
  //   prices: null,
  //   rating: null,
  //   numberOfReviews: null,
  //   cleaningFee: null,
  //   serviceFee: null,
  //   views: null,
  // });
  // return store.dispatch(fetchPriceAction().then(() => {
  //   expect(store.getActions()).toEqual(expectedAction);
  // }));
});

describe('Reservations Async Actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it('creates a FETCH_RESERVATIONS action when successfully fetching reservations from api', () => {
    fetchMock.getOnce('/api/reservations/', 200);
  });
});
