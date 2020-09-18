import React, { useCallback, useEffect } from 'react';
import { View, KeyboardAvoidingView, Platform, FlatList, ImageBackground, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { TodosTypes } from '../../../utils/Types';
import EmptyState from '../components/emptyState';
import Header from '../components/header';
import InputToolbar from '../components/inputToolbar';
import ListItem from '../components/listItem';
import { getTodos } from '../redux/actions';
import TodoStyles from './styles';

const bgSource = require('../../../assets/background.png');

const Todo = () => {
  const dispatch = useDispatch();
  const getList = useCallback(() => dispatch(getTodos()), [dispatch]);
  const todos = useSelector((state: TodosTypes) => state.list);

  useEffect(() => {
    getList();
  }, []);

  const { avoidingViewStyles, container, contentListStyles, bgStyles } = TodoStyles;

  const isIOS = Platform.OS === 'ios';

  return (
    <View style={container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground source={bgSource} style={bgStyles} />
      <KeyboardAvoidingView behavior={isIOS ? 'padding' : null} style={avoidingViewStyles}>
        <FlatList
          data={todos.data}
          renderItem={({ item }) => <ListItem item={item} />}
          keyExtractor={item => `${item.id}`}
          ListEmptyComponent={() => <EmptyState />}
          contentContainerStyle={contentListStyles}
          ListHeaderComponent={() => <Header />}
        />
        <InputToolbar />
      </KeyboardAvoidingView>
    </View>
  );
};

export default Todo;
