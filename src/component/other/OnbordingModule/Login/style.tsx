import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, hp, wp} from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {...commonStyles.mainContainer},
  btnContainer: {
    alignSelf: 'center',
    width: '100%',
    alignItems: 'center',
    marginTop: hp("14%"),
  },
  btnStyle: {marginVertical: '2%',alignSelf:"center"},
  Logintext: {fontSize:hp("2.4%"), fontWeight: '400', color: COLOR.gray_5},
  LogiNTextContainer: {
    ...commonStyles.horizontalView,
    alignSelf: 'center',
    marginTop: '10%',
  },
  logo: {
    width: wp('60%'),
    height: hp(11),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: hp('10%'),
    marginBottom: hp('20%'),
  },
});

export default styles;
