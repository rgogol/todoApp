import { StyleSheet } from 'react-native';
import { WHITE } from '../../../../utils/Colors';

const EmptyStateStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTextStyle: {
    fontSize: 16,
    color: WHITE,
  },
});

export default EmptyStateStyles;
