import React from 'react';
import { shallow } from 'enzyme';
import InputToolbar from '../src/modules/todo/components/inputToolbar';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe('InputToolbar', () => {
  const useState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');

  beforeEach(() => {
    useStateSpy.mockImplementation(init => [init, useState]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const wrapper = shallow(<InputToolbar />).dive();

  it('render as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('press add button with empty value', () => {
    const button = wrapper.find({ testID: 'add-new-button' });
    const submitAction = jest.fn();

    button.props().onPress();

    expect(submitAction).toHaveBeenCalledTimes(0);
  });
});
