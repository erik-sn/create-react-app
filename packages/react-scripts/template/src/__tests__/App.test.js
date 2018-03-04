import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import App from '../components/App';

it('renders without crashing', () => {
  const wrapper = shallow(< App/>);
  expect(wrapper.find('.App').length).to.equal(1);
});
