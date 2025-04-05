import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  titleDropDown: {
    fontSize: 12,
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
    fontSize: 10,
    fontWeight: '400',
    color: COLOR.gray_5,
    alignSelf: 'flex-end',
    marginRight: '5%',
    marginTop: 2,
  },
  lastBtn: {
    paddingHorizontal: '2%',
    height: 30,
    borderRadius: 10,
    backgroundColor: COLOR.primary,
    ...commonStyles.center,
  },
  btnText: {fontSize: 12, fontWeight: '800', color: COLOR.black},
  bottomBar: {
    width: '100%',
    height: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLOR.whites,
    position: 'absolute',
    bottom: 0,
    ...commonStyles.verticleView,
    paddingHorizontal: '5%',
  },
  MainText: {
    fontSize: 12,
    fontWeight: '800',
    color: COLOR.gray_5,
    width: '90%',
    alignSelf: 'center',
    marginTop: '6%',
  },
  selectContainer: {
    width: '90%',
    height: 40,
    backgroundColor: COLOR.white1,
    borderRadius: 16,
    ...commonStyles.verticleView,
    alignSelf: 'center',
    overflow: 'hidden',
    marginBottom: '4%',
    marginTop:"5%"
  },
  selectBtn: {
    ...commonStyles.center,
    height: 40,
    width: '49%',
    ...commonStyles.verticleView,
    paddingHorizontal: '15%',
  },
  selectdText: {
    fontSize: 16,
    fontFamily: FONT.Geist_Medium,
    color: COLOR.black_2,
  },
  IconStyle:{
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: COLOR.black,
  },
  ListContainer:  {
    width: '90%',
    height: 50,
    borderRadius: 10,
    backgroundColor: COLOR.perpal,
    alignSelf: 'center',
    marginBottom:"4%",
    justifyContent:"center",
    paddingHorizontal:"5%"
    
  }
});

export default styles;
