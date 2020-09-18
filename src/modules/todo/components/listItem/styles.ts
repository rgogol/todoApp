import { StyleSheet } from 'react-native';
import { BLACK, DARK_BLUE, LIGHT_GREY, TRANSPARENT } from '../../../../utils/Colors';

const iconSize = 30;

const ListItemStyles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 10,
    padding: 15,
    borderRadius: 5,
    backgroundColor: LIGHT_GREY,
    elevation: 2,
    shadowColor: BLACK,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 3,
    shadowOpacity: 0.24,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: iconSize,
    height: iconSize,
    borderRadius: iconSize / 2,
    marginRight: 10,
    borderWidth: 1,
    borderColor: DARK_BLUE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyles: {
    width: iconSize,
    height: iconSize,
    resizeMode: 'contain',
  },
  nameStyles: {
    fontSize: 15,
    fontWeight: '500',
  },
  dateStyles: {
    fontSize: 13,
    color: DARK_BLUE,
  },
  iconDoneStyles: {
    borderColor: TRANSPARENT,
  },
  containerDoneStyles: {
    opacity: 0.6,
  },
});

export default ListItemStyles;
