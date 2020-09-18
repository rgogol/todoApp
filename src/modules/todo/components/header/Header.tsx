import React from 'react';
import { View, Text } from 'react-native';
import ShareButton from '../share';
import HeaderStyles from './styles';

const Header = () => {
  const { container, textStyles } = HeaderStyles;
  return (
    <View style={container}>
      <Text style={textStyles}>TODO APP</Text>
      <ShareButton />
    </View>
  );
};

export default Header;
