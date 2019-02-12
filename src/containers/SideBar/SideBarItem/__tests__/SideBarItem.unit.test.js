import React from 'react';
import {shallow} from 'enzyme';
import SideBarItem  from '../SideBarItem';

describe('SideBarItem', () => {
  test('renders', () => {
    const wrapper = shallow(
      <SideBarItem />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
