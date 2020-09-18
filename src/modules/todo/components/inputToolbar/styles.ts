import { StyleSheet } from 'react-native';
import { BROWN, WHITE } from '../../../../utils/Colors';

const radius = 5;

const InputStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  inputStyles: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: BROWN,
    backgroundColor: WHITE,
    borderTopLeftRadius: radius,
    borderBottomLeftRadius: radius,
  },
  buttonStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: BROWN,
    borderWidth: 1,
    borderColor: BROWN,
    borderTopRightRadius: radius,
    borderBottomRightRadius: radius,
  },
  buttonTextStyles: {
    color: WHITE,
  },
});

export default InputStyles;
