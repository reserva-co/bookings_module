/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import Calendar from '../client/components/calendar';
import App from '../client/components/app';

const setUp = (props = {}) => {
  const component = shallow(<App {...props} />);
  return component;
};

describe('Calendar', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should render correctly in "debug" mode', () => {
    expect(component).toMatchSnapshot();
  });

  it('should render App without errors', () => {
    const wrapper = component.find('#module-container');
    expect(wrapper.length).toBe(1);
  });

  it('should render Calendar without errors', () => {
    const component1 = shallow(<Calendar />);
    const wrapper = component1.find('#big-container');
    expect(wrapper.length).toBe(1);
  });
});

// describe('Dynamic Features', () => {
//   it('should render correctly in "debug" mode', () => {
//     const component = shallow(<App debug />);

//     expect(component).toMatchSnapshot();
//   });
// });
