import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { iTask } from '../../../../utils/Interfaces';
import { TodosTypes } from '../../../../utils/Types';
import { markAsDone } from '../../redux/actions';
import ListItemStyles from './styles';

const checkMarkSource = require('../../../../assets/check_mark.png');

const ListItem = ({ item }: { item: iTask }) => {
  const data = useSelector((state: TodosTypes) => state.list.data);
  const dispatch = useDispatch();

  const { value, date, isDone } = item;
  const {
    container,
    row,
    iconContainer,
    iconStyles,
    nameStyles,
    dateStyles,
    iconDoneStyles,
    containerDoneStyles,
  } = ListItemStyles;

  const onPressAction = () => {
    const task = { ...item, isDone: true };
    dispatch(markAsDone(data, task));
  };

  return (
    <View style={[container, row, isDone && containerDoneStyles]}>
      <View style={row}>
        <TouchableOpacity
          testID="mark-as-done-btn"
          style={[iconContainer, isDone && iconDoneStyles]}
          onPress={onPressAction}
          disabled={isDone}>
          {isDone && <Image source={checkMarkSource} style={iconStyles} />}
        </TouchableOpacity>
        <Text style={nameStyles}>{value}</Text>
      </View>
      <Text style={dateStyles}>{date}</Text>
    </View>
  );
};

export default ListItem;
