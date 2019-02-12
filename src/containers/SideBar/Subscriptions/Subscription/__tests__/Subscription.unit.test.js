import React from 'react';
import {shallow} from 'enzyme';
import {Subscription} from '../Subscription';

test('renders empty subscription', () => {
  const wrapper = shallow(
    <Subscription/>
  );
  expect(wrapper).toMatchSnapshot();
});
