import {StyleSheet} from 'react-native';
import { COLOR, commonStyles, FONT } from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingVertical: 1,
    backgroundColor: COLOR.gray_4,
    marginVertical: '2%',
  },
  headerText: {
    fontSize: 16,
    fontFamily: FONT.Geist_SemiBold,
    color: COLOR.perpal_3,
    marginLeft: '3.4%',
  },
  item: {
    ...commonStyles.horizontalView,
    paddingHorizontal: '7%',
    paddingVertical: '2%',
  },
  userLogo: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: COLOR.gray_7,
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: COLOR.whites,
    ...commonStyles.center,
  },

  nameStyle: {
    fontSize: 14,
    fontFamily: FONT.Geist_Bold,
    color: COLOR.gray_5,
    marginLeft: '6%',
  },
  numberStyle: {
    fontSize: 12,
    fontFamily: FONT.Geist_Regular,
    color: COLOR.gray_6,
    marginLeft: '6%',
  },
  dialPadIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: COLOR.white,
  },
  DialPads: {
    backgroundColor: COLOR.perpal,
    width: 48,
    height: 48,
    borderRadius: 30,
    position: 'absolute',
    bottom: '5%',
    alignSelf: 'flex-end',
    right: '7%',
    ...commonStyles.center,
  },
});

export default styles;
