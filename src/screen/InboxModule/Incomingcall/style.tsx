import {StyleSheet} from 'react-native';
import { COLOR, commonStyles, FONT } from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  runSecond: {
    fontSize: 20,
    fontFamily: FONT.Geist_Regular,
    color: COLOR.perpal,
    alignSelf: 'center',
    marginTop: '5%',
  },
  Name: {
    fontSize: 30,
    fontFamily: FONT.Geist_Bold,
    color: COLOR.gray_5,
    alignSelf: 'center',
    marginTop: '10%',
  },
  number: {
    fontSize: 18,
    fontFamily: FONT.Geist_SemiBold,
    color: COLOR.gray_6,
    alignSelf: 'center',
    bottom: 8,
  },
  Card: {
    position: 'absolute',
    ...commonStyles.verticleView,
    bottom: '7%',
    width:"75%",
    alignSelf:"center"
  },
  CallEndBtn: {
    width: 80,
    height: 80,
    backgroundColor: COLOR.gray_7,
    borderRadius: 40,
    ...commonStyles.center,
  },
  EndIcon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    tintColor: COLOR.whites,
  },
  EndIconContainer: {
    width: 55,
    height: 55,
    borderRadius: 29,
    backgroundColor: COLOR.red,
    ...commonStyles.center,
    borderWidth:1,
    borderColor:COLOR.whites
  },
});

export default styles;
