import { StyleSheet } from 'react-native';
import { COLOR, commonStyles, hp } from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
 container: {
  ...commonStyles.mainContainer
 },
 Title: {
    fontSize: 20,
    fontWeight: '700',
    color: COLOR.gray_5,
    width: '80%',
    alignSelf: 'center',
    textAlign: 'center',
  },
  ContinueBtn: {width: '40%',alignSelf:"center",marginTop:"13%"},
  logo: {
    width: '60%',
    height: 90,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: '10%',
    marginTop:hp("30%")
  },
});

export default styles;
