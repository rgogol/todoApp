import React from 'react';
import { shallow } from 'enzyme';
import EmptyState from '../src/modules/todo/components/emptyState';

describe('EmptyState', () => {
  const wrapper = shallow(<EmptyState />).dive();

  it('render as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
