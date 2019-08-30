/* eslint-disable no-undef */

import calendarReducer from '../client/reducers/calendarReducer';
import guestsInfoReducer from '../client/reducers/guestsInfoReducer';
import popupCalendarReducer from '../client/reducers/popupCalendarReducer';
import popupGuestsReducer from '../client/reducers/popupGuestsReducer';
import pricesReducer from '../client/reducers/pricesReducer';
import reservationsReducer from '../client/reducers/reservationsReducer';

describe('Calendar Reducer', () => {
  it('should return the initial state', () => {
    expect(calendarReducer(undefined, {})).toEqual(
      {
        checkInDate: null,
        checkOutDate: null,
        mouseHoveredDate: null,
      },
    );
  });

  it('should handle GET_CHECK_IN_DATE', () => {
    expect(
      calendarReducer(undefined, {
        type: 'GET_CHECK_IN_DATE',
        payload: { month: 10, day: 14, year: 2019 },
      }),
    ).toEqual(
      {
        checkInDate: { month: 10, day: 14, year: 2019 },
        checkOutDate: null,
        mouseHoveredDate: null,
      },
    );

    expect(
      calendarReducer({ checkInDate: { month: 5, day: 10, year: 2019 }, checkOutDate: null, mouseHoveredDate: null }, {
        type: 'GET_CHECK_IN_DATE',
        payload: { month: 10, day: 14, year: 2019 },
      }),
    ).toEqual(
      {
        checkInDate: { month: 10, day: 14, year: 2019 },
        checkOutDate: null,
        mouseHoveredDate: null,
      },
    );
  });

  it('should handle GET_CHECK_IN_DATE', () => {
    expect(
      calendarReducer(undefined, {
        type: 'GET_CHECK_IN_DATE',
        payload: { month: 10, day: 14, year: 2019 },
      }),
    ).toEqual(
      {
        checkInDate: { month: 10, day: 14, year: 2019 },
        checkOutDate: null,
        mouseHoveredDate: null,
      },
    );

    expect(
      calendarReducer({ checkInDate: { month: 5, day: 10, year: 2019 }, checkOutDate: null, mouseHoveredDate: null }, {
        type: 'GET_CHECK_IN_DATE',
        payload: { month: 10, day: 14, year: 2019 },
      }),
    ).toEqual(
      {
        checkInDate: { month: 10, day: 14, year: 2019 },
        checkOutDate: null,
        mouseHoveredDate: null,
      },
    );
  });

  it('should handle GET_CHECK_OUT_DATE', () => {
    expect(
      calendarReducer(undefined, {
        type: 'GET_CHECK_OUT_DATE',
        payload: { month: 8, day: 21, year: 2019 },
      }),
    ).toEqual(
      {
        checkInDate: null,
        checkOutDate: { month: 8, day: 21, year: 2019 },
        mouseHoveredDate: null,
      },
    );

    expect(
      calendarReducer({ checkInDate: null, checkOutDate: { month: 5, day: 10, year: 2019 }, mouseHoveredDate: null }, {
        type: 'GET_CHECK_OUT_DATE',
        payload: { month: 2, day: 12, year: 2019 },
      }),
    ).toEqual(
      {
        checkInDate: null,
        checkOutDate: { month: 2, day: 12, year: 2019 },
        mouseHoveredDate: null,
      },
    );
  });

  it('should handle GET_MOUSE_HOVERED_DATE', () => {
    expect(
      calendarReducer(undefined, {
        type: 'GET_MOUSE_HOVERED_DATE',
        payload: { month: 12, day: 14, year: 2019 },
      }),
    ).toEqual(
      {
        checkInDate: null,
        checkOutDate: null,
        mouseHoveredDate: { month: 12, day: 14, year: 2019 },
      },
    );

    expect(
      calendarReducer({ checkInDate: null, checkOutDate: null, mouseHoveredDate: { month: 12, day: 14, year: 2019 } }, {
        type: 'GET_MOUSE_HOVERED_DATE',
        payload: { month: 4, day: 14, year: 2019 },
      }),
    ).toEqual(
      {
        checkInDate: null,
        checkOutDate: null,
        mouseHoveredDate: { month: 4, day: 14, year: 2019 },
      },
    );
  });

  it('should handle REMOVE_MOUSE_HOVERED_DATE', () => {
    expect(
      calendarReducer(undefined, {
        type: 'REMOVE_MOUSE_HOVERED_DATE',
      }),
    ).toEqual(
      {
        checkInDate: null,
        checkOutDate: null,
        mouseHoveredDate: null,
      },
    );

    expect(
      calendarReducer({ checkInDate: null, checkOutDate: null, mouseHoveredDate: { month: 12, day: 14, year: 2019 } }, {
        type: 'REMOVE_MOUSE_HOVERED_DATE',
      }),
    ).toEqual(
      {
        checkInDate: null,
        checkOutDate: null,
        mouseHoveredDate: null,
      },
    );
  });

  it('should handle CLEAR_DATES', () => {
    expect(
      calendarReducer(undefined, {
        type: 'CLEAR_DATES',
      }),
    ).toEqual(
      {
        checkInDate: null,
        checkOutDate: null,
        mouseHoveredDate: null,
      },
    );

    expect(
      calendarReducer({ checkInDate: { month: 12, day: 14, year: 2019 }, checkOutDate: { month: 12, day: 14, year: 2019 }, mouseHoveredDate: null }, {
        type: 'CLEAR_DATES',
      }),
    ).toEqual(
      {
        checkInDate: null,
        checkOutDate: null,
        mouseHoveredDate: null,
      },
    );
  });

  it('should handle CLEAR_CHECK_OUT_DATE', () => {
    expect(
      calendarReducer(undefined, {
        type: 'CLEAR_CHECK_OUT_DATE',
      }),
    ).toEqual(
      {
        checkInDate: null,
        checkOutDate: null,
        mouseHoveredDate: null,
      },
    );

    expect(
      calendarReducer({ checkInDate: null, checkOutDate: { month: 12, day: 14, year: 2019 }, mouseHoveredDate: null }, {
        type: 'CLEAR_CHECK_OUT_DATE',
      }),
    ).toEqual(
      {
        checkInDate: null,
        checkOutDate: null,
        mouseHoveredDate: null,
      },
    );
  });
});

describe('Guests Info Reducer', () => {
  it('should return the initial state', () => {
    expect(guestsInfoReducer(undefined, {})).toEqual(
      {
        adults: 2,
        children: 0,
        infants: 0,
      },
    );
  });

  it('should handle ADD_ADULT', () => {
    expect(
      guestsInfoReducer(undefined, {
        type: 'ADD_ADULT',
      }),
    ).toEqual(
      {
        adults: 3,
        children: 0,
        infants: 0,
      },
    );

    expect(
      guestsInfoReducer({ adults: 4, children: 0, infants: 0 }, {
        type: 'ADD_ADULT',
      }),
    ).toEqual(
      {
        adults: 5,
        children: 0,
        infants: 0,
      },
    );
  });

  it('should handle SUBTRACT_ADULT', () => {
    expect(
      guestsInfoReducer(undefined, {
        type: 'SUBTRACT_ADULT',
      }),
    ).toEqual(
      {
        adults: 1,
        children: 0,
        infants: 0,
      },
    );

    expect(
      guestsInfoReducer({ adults: 4, children: 0, infants: 0 }, {
        type: 'SUBTRACT_ADULT',
      }),
    ).toEqual(
      {
        adults: 3,
        children: 0,
        infants: 0,
      },
    );
  });

  it('should handle ADD_CHILD', () => {
    expect(
      guestsInfoReducer(undefined, {
        type: 'ADD_CHILD',
      }),
    ).toEqual(
      {
        adults: 2,
        children: 1,
        infants: 0,
      },
    );

    expect(
      guestsInfoReducer({ adults: 4, children: 2, infants: 0 }, {
        type: 'ADD_CHILD',
      }),
    ).toEqual(
      {
        adults: 4,
        children: 3,
        infants: 0,
      },
    );
  });

  it('should handle SUBTRACT_CHILD', () => {
    expect(
      guestsInfoReducer({ adults: 4, children: 3, infants: 0 }, {
        type: 'SUBTRACT_CHILD',
      }),
    ).toEqual(
      {
        adults: 4,
        children: 2,
        infants: 0,
      },
    );
  });

  it('should handle ADD_INFANT', () => {
    expect(
      guestsInfoReducer(undefined, {
        type: 'ADD_INFANT',
      }),
    ).toEqual(
      {
        adults: 2,
        children: 0,
        infants: 1,
      },
    );

    expect(
      guestsInfoReducer({ adults: 4, children: 0, infants: 0 }, {
        type: 'ADD_INFANT',
      }),
    ).toEqual(
      {
        adults: 4,
        children: 0,
        infants: 1,
      },
    );
  });

  it('should handle SUBTRACT_INFANT', () => {
    expect(
      guestsInfoReducer({ adults: 4, children: 0, infants: 3 }, {
        type: 'SUBTRACT_INFANT',
      }),
    ).toEqual(
      {
        adults: 4,
        children: 0,
        infants: 2,
      },
    );
  });
});

describe('Popup Calendar Reducer', () => {
  it('should return the initial state', () => {
    expect(popupCalendarReducer(undefined, {})).toEqual(
      {
        checkin: false,
        checkout: false,
      },
    );
  });

  it('should handle TOGGLE_CHECKIN_ON', () => {
    expect(
      popupCalendarReducer(undefined, {
        type: 'TOGGLE_CHECKIN_ON',
      }),
    ).toEqual(
      {
        checkin: true,
        checkout: false,
      },
    );
  });

  it('should handle TOGGLE_CHECKOUT_ON', () => {
    expect(
      popupCalendarReducer(undefined, {
        type: 'TOGGLE_CHECKOUT_ON',
      }),
    ).toEqual(
      {
        checkin: false,
        checkout: true,
      },
    );
  });

  it('should handle TOGGLE_CALENDARS_OFF', () => {
    expect(
      popupCalendarReducer(undefined, {
        type: 'TOGGLE_CALENDARS_OFF',
      }),
    ).toEqual(
      {
        checkin: false,
        checkout: false,
      },
    );
  });
});

describe('Popup Guests Reducer', () => {
  it('should return the initial state', () => {
    expect(popupGuestsReducer(undefined, {})).toEqual(
      false,
    );
  });

  it('should handle TOGGLE_GUEST_INFO_ON', () => {
    expect(
      popupGuestsReducer(undefined, {
        type: 'TOGGLE_GUEST_INFO_ON',
      }),
    ).toEqual(
      true,
    );
  });

  it('should handle TOGGLE_GUEST_INFO_OFF', () => {
    expect(
      popupGuestsReducer(true, {
        type: 'TOGGLE_GUEST_INFO_OFF',
      }),
    ).toEqual(
      false,
    );
  });
});

describe('Prices Reducer', () => {
  it('should return the initial state', () => {
    expect(pricesReducer(undefined, {})).toEqual(
      {
        price: null,
        rating: null,
        numberOfReviews: null,
        cleaningFee: null,
        serviceFee: null,
        views: null,
      },
    );
  });

  it('should handle FETCH_PRICE', () => {
    expect(
      pricesReducer(undefined, {
        type: 'FETCH_PRICE',
        payload: {
          price: 50,
          rating: 4.23,
          numberOfReviews: 512,
          serviceFee: 14,
          cleaningFee: 23,
          views: 200,
        },
      }),
    ).toEqual(
      {
        price: 50,
        rating: 4.23,
        numberOfReviews: 512,
        serviceFee: 14,
        cleaningFee: 23,
        views: 200,
      },
    );
  });
});

describe('Reservations Reducer', () => {
  it('should return the initial state', () => {
    expect(reservationsReducer(undefined, {})).toEqual(
      {
        reserved: [],
      },
    );
  });

  it('should handle FETCH_RESERVATIONS', () => {
    expect(
      reservationsReducer(undefined, {
        type: 'FETCH_RESERVATIONS',
        payload: [2, 3, 4, 5],
      }),
    ).toEqual(
      {
        reserved: [2, 3, 4, 5],
      },
    );
  });
});
