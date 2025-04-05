import {StyleSheet} from 'react-native';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: COLOR.gray_5,
    width: '60%',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: '7%',
  },
  profile: {
    fontSize: 16,
    fontWeight: '400',
    color: COLOR.gray_5,
    marginLeft: '11%',
    marginTop: '5%',
  },
  titleStyle: {fontSize: 14, marginLeft: '11%', fontWeight: '700'},
  btnStyle: {marginVertical: '2%', alignSelf: 'center', marginTop: '8%'},
  logo: {
    width: '60%',
    height: 90,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: '43%',
    marginBottom: '20%',
  },
});

export default styles;
