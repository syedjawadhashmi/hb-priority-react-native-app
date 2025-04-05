import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, hp} from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  Title: {
    fontSize: 22,
    fontWeight: '700',
    color: COLOR.gray_5,
    width: '34%',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: '12%',
  },
  discription: {
    fontSize: 14,
    fontWeight: '400',
    color: COLOR.gray_5,
    textAlign: 'center',
    width: '90%',
    alignSelf: 'center',
    marginTop: '7%',
  },
  DropDown: {
    height: 32,
    alignSelf: 'center',
    marginTop: '7%',
    width: 124,
    paddingHorizontal: '10%',
  },
  DrawerContainer: {top: 34, paddingLeft: 10, left: 5},
  EmployContainer: {
    paddingHorizontal: '6%',
    ...commonStyles.verticleView,
    marginTop: '7%',
  },
  Employselect: {
    width: 60,
    height: 32,
    ...commonStyles.center,
    borderRadius: 13,
  },
  employText: {fontSize: 14, fontWeight: '700', color: COLOR.whites},
  RevenueContainer: {
    ...commonStyles.verticleView,
    marginTop: '5%',
    width: '90%',
    flexWrap: 'wrap',
    alignSelf:"center"
  },
  RevenueSelect: {
    width: 104,
    height: 32,
    ...commonStyles.center,
    borderRadius: 13,
    marginBottom:"2%"
  },
  ContinueBtn: {width: '55%',alignSelf:"center",marginTop:"4%"},
  logo: {
    width: '60%',
    height: 90,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop:hp("3%"),
    marginBottom:hp("10%")
  },
});

export default styles;
