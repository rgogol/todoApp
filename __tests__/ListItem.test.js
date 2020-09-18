import React from 'react';
import { shallow } from 'enzyme';
import ListItem from '../src/modules/todo/components/listItem';
import { cTask } from '../src/utils/Classes';
import { getCurrentDate } from '../src/utils/Tools';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe('ListItem', () => {
  const fakeData = new cTask(1, 'Drink water', false, getCurrentDate());
  const wrapper = shallow(<ListItem item={fakeData} />).dive();

  it('render as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // it('press mark as done', () => {
  //   const instance = wrapper.instance();
  //   const button = wrapper.find({ testID: 'mark-as-done-btn' });
  //   const onPress = jest.spyOn(button, 'onPressAction');

  //   instance.forceUpdate();
  //   button.props().onPress();
  //   expect(onPress).toHaveBeenCalledTimes(1);
  // });
});
