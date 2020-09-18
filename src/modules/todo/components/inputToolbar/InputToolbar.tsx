import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';
import { addNewTask } from '../../redux/actions';
import InputStyles from './styles';

const InputToolbar = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const { container, inputStyles, buttonStyles, buttonTextStyles } = InputStyles;

  const onChangeValue = (value: string) => setTask(value);

  const submitAction = () => {
    dispatch(addNewTask(task));
    setTask('');
    Keyboard.dismiss();
  };

  return (
    <View style={container}>
      <TextInput
        style={inputStyles}
        placeholder="Type new task"
        value={task}
        onChangeText={onChangeValue}
        testID="input"
      />
      <TouchableOpacity testID="add-new-button" style={buttonStyles} onPress={submitAction} disabled={task === ''}>
        <Text style={buttonTextStyles}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputToolbar;
