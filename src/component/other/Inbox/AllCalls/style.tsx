import {StyleSheet} from 'react-native';
import { COLOR, commonStyles, FONT } from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  date: {
    fontSize: 18,
    color: COLOR.gray_5,
    marginLeft: '6%',
    fontWeight:"700"
  },
  nameStyle: {
    fontSize: 12,
    color: COLOR.gray_5,
    marginLeft: '6%',
    fontWeight:"700"
  },
  numberStyle: {
    fontSize: 12,
    fontFamily: FONT.Geist_Regular,
    color: COLOR.gray_6,
    marginLeft: '6%',
  },
  time: {color: COLOR.gray_8, fontSize: 12, fontFamily: FONT.Geist_Regular},
  userLogo: {width: 20, height: 20, resizeMode: 'contain',tintColor:COLOR.gray},
  iconContainer: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: COLOR.whites,
    ...commonStyles.center,
  },
  nameContainer: {...commonStyles.verticleView},
  ListContainer: {
    ...commonStyles.horizontalView,
    backgroundColor: COLOR.gray_7,
    width: '90%',
    alignSelf: 'center',
    marginVertical: '1.5%',
    borderRadius: 10,
    paddingHorizontal: '5%',
    height: 66,
  },
  MissedCall: {width: 12, height: 12, resizeMode: 'contain', marginLeft: '6%'},
  status: {
    fontSize: 12,
    color: COLOR.gray_6,
    marginLeft: '2%',
    fontWeight:"400"
  },
  dialPadIcon: {width: 28, height: 28, resizeMode: 'contain',tintColor:COLOR.white},
  DialPads: {
    backgroundColor: COLOR.perpal,
    width: 48,
    height: 48,
    borderRadius: 30,
    position: 'absolute',
    bottom: '5%',
    alignSelf: 'flex-end',
    right:"7%",
    ...commonStyles.center

  },
});

export default styles;
