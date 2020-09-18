import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../../utils/Contstans';

const TodoStyles = StyleSheet.create({
  avoidingViewStyles: {
    flex: 1,
    flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingBottom: getBottomSpace(),
  },
  contentListStyles: {
    flexGrow: 1,
  },
  bgStyles: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    position: 'absolute',
  },
});

export default TodoStyles;
