import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT, hp, wp} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 70,
    borderWidth: 1,
    borderColor: COLOR.black,
    borderRadius: 12,
    alignSelf: 'center',
    marginVertical: '2%',
    ...commonStyles.verticleView,
  },
  nameAndtimeContainer: {
    ...commonStyles.verticleView,
    // backgroundColor: 'red',
    width: '95%',
  },
  name: {fontSize: 15, fontFamily: FONT.Geist_Bold, color: COLOR.gray_5},
  time: {fontSize: 11, fontFamily: FONT.Geist_Bold, color: COLOR.gray},
  icon: {width: 26, height: 26, resizeMode: 'contain', left: 14},
  EmptyIcon: {width: 19, height: 42, resizeMode: 'contain'},
  discription: {
    fontSize: 10,
    color: COLOR.gray_6,
    fontWeight:"600"
  },
  status: {
    fontSize: 14,
    fontFamily: FONT.Geist_Regular,
    color: COLOR.gray_6,
    marginLeft: '2%',
  },
  MissedCall: {width: 12, height: 12, resizeMode: 'contain'},
  ThreeDot: {width: 10, height: 15, resizeMode: 'contain', right: 10},
  modals: {
    position: 'absolute',
    alignSelf: 'flex-end',
    width: wp("20%"),
    height:88,
    backgroundColor: COLOR.whites,
    zIndex: 10,
    right: wp("8%"),
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLOR.black,
    paddingVertical:"1%",
    // paddingHorizontal:"1%",
    ...commonStyles.center
  },
  modalItem: {
    paddingHorizontal: wp('1.6%'),
    paddingVertical: hp('0.3%'),
    borderRadius: 5,
    alignSelf: 'flex-start',
    marginVertical: '2%',
    marginLeft:"3%",
  },
  modalText: {fontSize: 8, fontWeight: '700', color: COLOR.whites},
  
  statusbtn: {
    paddingHorizontal:wp ('3%'),
    paddingVertical: hp('0.3%'),
    borderRadius: 5,
    alignSelf: 'flex-end',
    bottom:-7,
    position: 'absolute',
    right:10
  },
  checkIcon:  {width: 12, height: 12, resizeMode: 'contain'}
});

export default styles;
