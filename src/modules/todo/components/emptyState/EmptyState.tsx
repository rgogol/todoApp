import React from 'react';
import { View, Text } from 'react-native';
import EmptyStateStyles from './styles';

const EmptyState = () => {
  const { container, emptyTextStyle } = EmptyStateStyles;
  return (
    <View style={container}>
      <Text style={emptyTextStyle}>Type what you have to do</Text>
    </View>
  );
};

export default EmptyState;
