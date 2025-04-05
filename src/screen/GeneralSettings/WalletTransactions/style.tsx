import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, normalize} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {},
  titleSTyele: {
    fontSize: normalize(12),
    fontWeight: '800',
    marginLeft: '5%',
    color: COLOR.gray_5,
  },
  BalanceCard: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: COLOR.whites,
    alignSelf: 'center',
    ...commonStyles.verticleView,
    paddingHorizontal: '3%',
    marginBottom: '2%',
    paddingVertical: '3%',
    marginTop:"2%"
  },
  iconStyle: {width: 10, height: 10, resizeMode: 'contain'},
  balanceText: {fontSize: normalize(22), fontWeight: '800', color: COLOR.perpal_2},
  btnText: {fontSize: normalize(12), fontWeight: '800', color: COLOR.whites},
  btnStyle: {
    paddingHorizontal: '4%',
    paddingVertical: '2%',
    backgroundColor: COLOR.perpal_2,
    borderRadius: 12,
  },
  Cart: {width: 20, height: 20, resizeMode: 'contain'},
  DropDown: {
    width: 70,
    borderRadius: 10,
    backgroundColor: COLOR.white1,
    ...commonStyles.verticleView,
    paddingVertical: '2%',
    paddingHorizontal: '3%',
    marginLeft: '2%',
  },
  textStyle: {fontSize: normalize(12), fontWeight: '400', color: COLOR.gray_5},
  cardType: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: COLOR.whites,
    alignSelf: 'center',
    paddingHorizontal: '3%',
    marginBottom: '2%',
    paddingVertical: '3%',
  },
  discription: {fontSize: normalize(10), fontWeight: '400', color: COLOR.gray_5,marginLeft:'2%'},
  SelectorBtn: {
    ...commonStyles.verticleView,
    width:"60%",
    height: 30,
    backgroundColor: COLOR.gray_7,
    borderWidth: 1,
    borderColor: COLOR.perpal_3,
    borderRadius: 20,
    overflow: 'hidden',
    marginTop:"5%",
    marginBottom:"5%",
    marginLeft:"5%"
  },
  DropDate: {
    fontSize: normalize(9),
    fontWeight: '700',
    color: COLOR.gray_5,
    marginLeft: '2%',
  },
  TabalStatus: {...commonStyles.verticleView,marginBottom:"5%"},
  tabalStatusBox: {
    width: '25%',
    height: 27,
    backgroundColor: COLOR.perpal,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderLeftColor: COLOR.gray_7,
    borderRightColor: COLOR.gray_7,
    ...commonStyles.center,
  },
});

export default styles;
