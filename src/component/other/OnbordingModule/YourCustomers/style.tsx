import {StyleSheet} from 'react-native';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  Title: {
    fontSize: 22,
    fontWeight: '700',
    color: COLOR.gray_5,
    width: '50%',
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
    marginTop: '5%',
    flexWrap: 'wrap',
  },
  btnStyle: { width: '90%', marginTop: '3%'},
  TeamStyle: {
    fontSize: 14,
    fontWeight: '700',
    color: COLOR.gray_5,
    marginLeft: '6%',
    marginTop: '5%',
  },
  buttonContainer: {
    ...commonStyles.verticleView,
    paddingHorizontal: '8%',
    marginTop: '5%',
  },
  SkipBtn: {width: '36%'},
  ContinueBtn: {width: '61%'},
  logo: {
    width: '60%',
    height: 90,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop:"7%",
    marginBottom:"20%"
  },
});

export default styles;
