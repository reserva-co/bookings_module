import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';

import App from './client/components/app.js';

describe('<App />', () => {
  it('renders three `.foo-bar`s', () => {
    const wrapper = render(<App />);
    expect(wrapper.find('.foo-bar')).to.have.lengthOf(3);
  });

  it('renders the title', () => {
    const wrapper = render(<Foo title="unique" />);
    expect(wrapper.text()).to.contain('unique');
  });
});

// import React from 'react';
// import { shallow } from 'enzyme';

// // Components
// import WelcomeMessage from './WelcomeMessage';

// function setup() {
//   const props = {
//     imgPath: 'some/image/path/to/a/mock/image',
//   };
//   const wrapper = shallow(<WelcomeMessage />);
//   return { wrapper, props };
// }

// describe('WelcomeMessage Test Suite', () => {
//   it('Should have an image', () => {
//     const { wrapper } = setup();
//     expect(wrapper.find('img').exists()).toBe(true);
//   });
// });