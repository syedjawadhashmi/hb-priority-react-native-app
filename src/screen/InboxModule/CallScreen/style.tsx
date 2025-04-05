import {StyleSheet} from 'react-native';
import { COLOR, commonStyles, FONT, hp } from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  runSecond: {
    fontSize: 20,
    fontFamily: FONT.Geist_Regular,
    color: COLOR.perpal_3,
    alignSelf: 'center',
    marginTop: hp('5%'),
  },
  Name: {
    fontSize: 36,
    color: COLOR.gray_5,
    alignSelf: 'center',
    marginTop: hp('1%'),
    fontWeight:"700"
  },
  number: {
    fontSize: 20,
    color: COLOR.gray_6,
    alignSelf: 'center',
    fontWeight:"700",

  },
  Card: {
    backgroundColor: COLOR.gray_4,
    width: '73%',
    borderRadius: 62,
    position: 'absolute',
    bottom: '5%',
    alignSelf: 'center',
    paddingVertical:hp("1%"),
    justifyContent:"space-around"
  },
  IconsStyle: {width: 40, height: 40, resizeMode: 'contain'},
  IconContainer: {
    ...commonStyles.verticleView,
    marginHorizontal: '10%',
    marginBottom:hp("6%")
  },
  CallEndBtn: {
    width: 60,
    height: 60,
    backgroundColor: COLOR.red,
    borderRadius: 30,
    ...commonStyles.center,
    alignSelf:'center',
  },
  EndIcon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    tintColor: COLOR.whites,
  },
});

export default styles;
