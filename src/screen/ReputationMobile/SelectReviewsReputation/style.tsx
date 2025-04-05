import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT, normalize} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {...commonStyles.mainContainer},
  filterBtn: {
    paddingVertical: '1.4%',
    backgroundColor: COLOR.perpal_2,
    borderRadius: 5,
    ...commonStyles.verticleView,
    width: 75,
    paddingHorizontal: '3%',
    marginLeft: '5%',
    marginTop: '2%',
    marginBottom: '4%',
  },
  FilterIcon: {width: 15, height: 15, resizeMode: 'contain'},
  FilterText: {fontSize: normalize(12), fontWeight: '700', color: COLOR.white},
  titleContainer: {
    height: 40,
    marginBottom: '2%',
    backgroundColor: COLOR.perpal,
    justifyContent: 'center',
    borderRadius: 14,
    width: '90%',
    alignSelf: 'center',
    marginTop: '5%',
  },

  title: {
    fontSize: normalize(16),
    fontWeight: '700',
    color: COLOR.whites,
    marginLeft: '3.6%',
  },

  ListContainer: {
    width: '80%',
    borderRadius: 20,
    backgroundColor: COLOR.gray_7,
    alignSelf: 'center',
    marginBottom: '2.5%',
  },
  listImage: {width: 45, height: 45, resizeMode: 'contain'},
  listbtn: {
    width: 70,
    height: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: COLOR.perpal_3,
    ...commonStyles.center,
  },
  ListBtnText: {fontSize: normalize(12), fontWeight: '700', color: COLOR.whites},
  TitleList: {
    fontSize: normalize(16),
    fontWeight: '700',
    color: COLOR.gray_5,
    marginLeft: '5%',
    marginTop: '1%',
  },
  discription: {
    fontSize: normalize(12),
    fontWeight: '400',
    color: COLOR.gray_5,
    alignSelf: 'center',
    marginTop: '2%',
    width: '89%',
  },
  Stars: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    padding: 10,
    marginHorizontal: 2,
  },

  LineStyle: {
    width: '90%',
    height: 2,
    backgroundColor: COLOR.gray_5,
    alignSelf: 'center',
    marginTop: '3%',
  },
  bottomBar: {
    width: '100%',
    height: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLOR.whites,
    position: 'absolute',
    bottom: 0,
    ...commonStyles.verticleView,
    paddingHorizontal:"5%"
  },
  StarContainer: {
    ...commonStyles.horizontalView,
  },
  button: {
    width: 50,
    height: 33,
    alignSelf: 'center',
    paddingHorizontal: 10,
    backgroundColor: COLOR.perpal_3,
    borderRadius: 12,
    ...commonStyles.verticleView,
  },
  openDropDown: {
    position: 'absolute',
    top: 35,
    backgroundColor: COLOR.whites,
    zIndex: 1,
    borderWidth: 1,
    borderColor: COLOR.gray,
    borderRadius: 4,
    marginTop: '2%',
    width: 50,
  },
  buttonText: {
    fontSize: normalize(13),
    color: COLOR.whites,
  },
  optionText: {
    fontSize: 13,
    color: COLOR.black,
    padding: '2%',
  },
  titleDropDown: {
    fontSize: normalize(12),
    color: COLOR.gray_5,
    marginBottom: '1.5%',
    marginTop: '1.5%',
    fontWeight: '700',
  },
  iconStyle: {width: 10, height: 10, resizeMode: 'contain'},
  ToggalContainer: {
    height: 150,
    marginLeft: '4%',
    paddingVertical: '6%',
  },
  DateStyle: {
    fontSize: normalize(10),
    fontWeight: '400',
    color: COLOR.gray_5,
    alignSelf: 'flex-end',
    marginRight: '5%',
    marginTop: 2,
    marginBottom:"2%"
  },
  lastBtn: {
    paddingHorizontal: '2%',
    height: 30,
    borderRadius: 10,
    backgroundColor: COLOR.primary,
    ...commonStyles.center
  },
  btnText:{fontSize:normalize(12),fontWeight:"800",color:COLOR.black},
  select:{
    fontSize: normalize(10),
    fontWeight: '400',
    color: COLOR.gray_5,
    marginBottom: '5%',
  }
});

export default styles;
