/* eslint-disable no-undef */
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/components/app';
// import Index from '../client/index';
import Calendar from '../client/components/calendar';
import CalendarOut from '../client/components/calendarOut';
import Checkin from '../client/components/checkin';
import Fees from '../client/components/fees';
import Guests from '../client/components/guests';
import GuestsInfo from '../client/components/guestsInfo';
import PriceAndRating from '../client/components/priceAndRating';

Enzyme.configure({ adapter: new Adapter() });

// function setup() {
//   const props = {
//     addTodo: jest.fn(),
//   };

//   const enzymeWrapper = shallow(<Index {...props} />);

//   return {
//     props,
//     enzymeWrapper,
//   };
// }

// describe('components', () => {
//   describe('Index', () => {
//     it('should render self and subcomponents', () => {
//       const { enzymeWrapper } = setup();

//       expect(enzymeWrapper.find(App)).toHaveLength(1);

//       // expect(enzymeWrapper.find('h1').text()).toBe('todos');

//       // const todoInputProps = enzymeWrapper.find('TodoTextInput').props();
//       // expect(todoInputProps.newTodo).toBe(true);
//       // expect(todoInputProps.placeholder).toEqual('What needs to be done?');
//     });

//     // it('should call addTodo if length of text is greater than 0', () => {
//     //   const { enzymeWrapper, props } = setup();
//     //   const input = enzymeWrapper.find('TodoTextInput');
//     //   input.props().onSave('');
//     //   expect(props.addTodo.mock.calls.length).toBe(0);
//     //   input.props().onSave('Use Redux');
//     //   expect(props.addTodo.mock.calls.length).toBe(1);
//     // });
//   });
// });
