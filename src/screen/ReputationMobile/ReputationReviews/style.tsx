import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT, normalize, wp} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  TextInputCIntainer: {
    ...commonStyles.verticleView,
    paddingHorizontal: '5%',
    marginTop: '2%',
  },
  filterBtn: {
    paddingVertical: '1.4%',
    backgroundColor: COLOR.perpal_2,
    borderRadius: 5,
    ...commonStyles.verticleView,
    width: wp(20),
    paddingHorizontal: '3%',
  },
  FilterIcon: {width: 15, height: 15, resizeMode: 'contain'},
  FilterText: {fontSize: normalize(12), fontWeight: '700', color: COLOR.white},
  selectContainer: {
    width: '90%',
    height: 40,
    backgroundColor: COLOR.white1,
    borderRadius: 16,
    ...commonStyles.verticleView,
    alignSelf: 'center',
    overflow: 'hidden',
    marginBottom: '4%',
  },
  selectBtn: {...commonStyles.center, height: 40, width: '49%'},
  selectdText: {
    fontSize: normalize(16),
    fontFamily: FONT.Geist_Medium,
    color: COLOR.black_2,
  },
  Stars: {width: 22, height: 22, resizeMode: 'contain', padding: 10,marginHorizontal:2},
  StarContainer: {
    ...commonStyles.horizontalView
  },

  ListContainer: {
    width: '90%',
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
    width:"89%"
    
  },
  LineStyle: {
    width: '90%',
    height: 2,
    backgroundColor: COLOR.gray_5,
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom:"6%"
  },
  bottomBar: {
    width: '100%',
    height: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLOR.primary,
    position:"absolute",
    bottom:0
  },
});

export default styles;
