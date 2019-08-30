/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { App } from '../client/components/app';
// import Index from '../client/index';
import Calendar from '../client/components/calendar';
import CalendarOut from '../client/components/calendarOut';
import Checkin from '../client/components/checkin';
import Fees from '../client/components/fees';
import Guests from '../client/components/guests';
import GuestsInfo from '../client/components/guestsInfo';
import PriceAndRating from '../client/components/priceAndRating';

Enzyme.configure({ adapter: new Adapter() });

function setupApp() {
  const props = {
    fetchPrice: jest.fn(),
  };
  const enzymeWrapper = shallow(<App {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}

function setupCalendar() {
  const props = {
    monthName: 'August',
    checkOutDate: null,
    checkInDate: null,
    clearCheckOutDate: jest.fn(),
    getCheckInDate: jest.fn(),
    toggleCheckOutOn: jest.fn(),
    clearDates: jest.fn(),
  };
  const enzymeWrapper = shallow(<Calendar {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}
function setupCalendarOut() {
  const props = {
    mouseHoveredDate: jest.fn(),
    getCheckOutDate: jest.fn(),
    getMouseHoveredDate: jest.fn(),
    clearDates: jest.fn(),
    removeMouseHoveredDate: jest.fn(),
    toggleCheckInOn: jest.fn(),
    toggleCalendarsOff: jest.fn(),
  };
  const enzymeWrapper = shallow(<CalendarOut {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}

function setupCheckin() {
  const props = {
    addTodo: jest.fn(),
  };
  const enzymeWrapper = shallow(<Checkin {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}

function setupFees() {
  const props = {
    price: 25,
  };
  const enzymeWrapper = shallow(<Fees {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}

function setupGuests() {
  const props = {
    addTodo: jest.fn(),
  };
  const enzymeWrapper = shallow(<Guests {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}

function setupGuestsInfo() {
  const props = {
    addTodo: jest.fn(),
  };
  const enzymeWrapper = shallow(<GuestsInfo {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}

function setupPriceAndRating() {
  const props = {
    price: 500,
  };
  const enzymeWrapper = shallow(<PriceAndRating {...props} />);
  return {
    props,
    enzymeWrapper,
  };
}

describe('components', () => {
  describe('App', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setupApp();
      expect(enzymeWrapper.find('SmallCenteredText')).toHaveLength(1);
      expect(enzymeWrapper.find('SmallCenteredText').text()).toBe('You won\'t be charged yet');
      expect(enzymeWrapper.find('ReserveButton')).toHaveLength(1);
      expect(enzymeWrapper.find('ReserveButton').text()).toBe('Reserve');
    });
  });

  describe('Calendar', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setupCalendar();
      expect(enzymeWrapper.find('PopupCalendar')).toHaveLength(1);
      expect(enzymeWrapper.find('PopupInnerCalendar')).toHaveLength(1);
      expect(enzymeWrapper.find('MonthName').text()).toBe('August 2019');
    });
  });

  describe('CalendarOut', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setupCalendarOut();
      expect(enzymeWrapper.find('PopupCalendarOut')).toHaveLength(1);
      expect(enzymeWrapper.find('MonthName').text()).toBe('August 2019');
    });
  });

  describe('CalendarOut', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setupCalendarOut();
      expect(enzymeWrapper.find('PopupCalendarOut')).toHaveLength(1);
      expect(enzymeWrapper.find('MonthName').text()).toBe('August 2019');
    });
  });

  describe('Checkin', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setupCheckin();
      expect(enzymeWrapper.find('CheckInSmallText')).toHaveLength(1);
      expect(enzymeWrapper.find('CheckInSmallText').text()).toBe('Dates');
      expect(enzymeWrapper.find('CheckInText')).toHaveLength(1);
      expect(enzymeWrapper.find('CheckInText').text()).toBe('Check In');
      expect(enzymeWrapper.find('CheckOutText')).toHaveLength(1);
      expect(enzymeWrapper.find('CheckOutText').text()).toBe('Check Out');
    });
  });

  describe('Guests', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setupGuests();
      expect(enzymeWrapper.find('GuestsSmallText')).toHaveLength(1);
      expect(enzymeWrapper.find('GuestsSmallText').text()).toBe('Guests');
    });
  });

  describe('GuestsInfo', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setupGuestsInfo();
      expect(enzymeWrapper.find('DescriptionColumn')).toHaveLength(3);
      expect(enzymeWrapper.find('NumberOfGuests')).toHaveLength(3);
    });
  });

  describe('PriceAndRating', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper, props } = setupPriceAndRating();
      expect(enzymeWrapper.find('PriceName')).toHaveLength(1);
      expect(enzymeWrapper.find('PriceName').text()).toBe(`$${props.price}`);
    });
  });
});
