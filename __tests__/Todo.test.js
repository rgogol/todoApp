import React from 'react';
import { shallow } from 'enzyme';
import Todo from '../src/modules/todo/views';
import { cTask } from '../src/utils/Classes';
import { getCurrentDate } from '../src/utils/Tools';
import { useSelector } from 'react-redux';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

jest.mock('react-native-share', () => {
  return {
    open: jest.fn(),
  };
});

const fakeData = new cTask(1, 'Drink water', false, getCurrentDate());
const initialState = {
  list: {
    data: [fakeData],
  },
};

describe('Todo', () => {
  const wrapper = shallow(<Todo />).dive();

  beforeEach(() => {
    useSelector.mockImplementation(callback => {
      return callback(initialState);
    });
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  it('render as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
