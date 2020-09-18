import React from 'react';
import { shallow } from 'enzyme';
import Header from '../src/modules/todo/components/header';

jest.mock('react-native-share', () => {
  return {
    open: jest.fn(),
  };
});

describe('Header', () => {
  const wrapper = shallow(<Header />).dive();

  it('render as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
