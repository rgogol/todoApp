import { StyleSheet } from 'react-native';
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper';
import { LIGHT_BLUE, SKY } from '../../../../utils/Colors';

const paddingSize = 20;

const HeaderStyles = StyleSheet.create({
  container: {
    paddingTop: isIphoneX() ? getStatusBarHeight() + paddingSize : paddingSize,
    backgroundColor: SKY,
    padding: paddingSize,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textStyles: {
    color: LIGHT_BLUE,
    fontSize: 18,
    fontWeight: '700',
  },
});

export default HeaderStyles;
