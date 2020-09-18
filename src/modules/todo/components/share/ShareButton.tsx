import React from 'react';
import { Text, TouchableOpacity, Platform } from 'react-native';
import { useSelector } from 'react-redux';
import Share from 'react-native-share';
import { TodosTypes } from '../../../../utils/Types';
import ShareStyles from './styles';
import { iTask } from '../../../../utils/Interfaces';

const ShareButton = () => {
  const todos = useSelector((state: TodosTypes) => state.list);

  const { textStyles } = ShareStyles;

  const shareOptions = () => {
    const todosToShare = todos.data.map((item: iTask) => `${item.value} - ${item.isDone ? 'Done' : 'To do'}`);
    const message = todosToShare.join(' | ');

    return Platform.select({
      ios: {
        activityItemSources: [
          {
            placeholderItem: { type: 'text', content: 'tekst 1' },
            item: {
              default: { type: 'text', content: message },
              message: null,
            },
            linkMetadata: {
              title: 'Share your todo list',
            },
          },
        ],
      },
      default: {
        title: 'Share your todo list',
        message,
      },
    });
  };

  const onShare = async () => Share.open(shareOptions());

  return (
    todos.data.length !== 0 ? (
      <TouchableOpacity onPress={onShare}>
        <Text style={textStyles}>Share</Text>
      </TouchableOpacity>
    ) : null
  );
};

export default ShareButton;
