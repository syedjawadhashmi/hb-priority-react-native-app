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
    marginBottom: '7%',
  },
  discription: {
    fontSize: 14,
    fontWeight: '400',
    color: COLOR.gray_5,
    textAlign: 'center',
    width: '68%',
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom: '9%',
  },
  selctorContainer: {
    ...commonStyles.horizontalView,
    marginVertical: '2%',
    marginLeft: '10%',
  },
  check: {width: 18, height: 18, resizeMode: 'contain'},
  checkTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: COLOR.gray_5,
    marginLeft: '2%',
  },
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
    marginTop:hp("9%"),
    marginBottom:hp("10%")

  },
});

export default styles;
