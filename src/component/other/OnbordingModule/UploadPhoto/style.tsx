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
    width: '60%',
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
  AddImage: {width: 60, height: 60, resizeMode: 'contain', alignSelf: 'center'},
  uploadBtn: {width: '45%', alignSelf: 'center', marginTop: '3%'},
  buttonContainer: {
    ...commonStyles.verticleView,
    paddingHorizontal: '8%',
    marginTop: '9%',
  },
  SkipBtn: {width: '36%'},
  ContinueBtn: {width: '61%'},
  logo: {
    width: '60%',
    height: 90,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: '10%',
    marginTop:hp("8%")
  },
  DropDown: {
    height: 32,
    alignSelf: 'center',
    marginTop: '2%',
    width: 124,
    paddingHorizontal: '10%',
  },
  DrawerContainer: {top: 34, paddingLeft: 10, left: 5},
});

export default styles;
