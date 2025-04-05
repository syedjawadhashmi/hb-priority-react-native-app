import {StyleSheet} from 'react-native';
import { COLOR, commonStyles, normalize } from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    marginTop: '6%',
  },
  AmmountContainer: {
    width: '90%',
    backgroundColor: COLOR.gray_7,
    alignSelf: 'center',
    borderRadius: 14,
    marginBottom: '5%',
  },
  titleContainer: {
    height: 40,
    marginBottom: '2%',
    backgroundColor: COLOR.perpal,
    justifyContent: 'center',
    borderRadius: 14,
  },

  title: {
    fontSize: normalize(16),
    fontWeight: '700',
    color: COLOR.whites,
    marginLeft: '3.6%',
  },
  FielsStyle: {marginBottom: '5%'},
  checkBtn: {
    ...commonStyles.horizontalView,
    marginLeft: '5.5%',
    marginTop: '3%',
    marginBottom:"3%"
  },
  checkText: {
    fontSize: normalize(11),
    fontWeight: '700',
    color: COLOR.gray_5,
    marginLeft: '4%',
  },
  check: {width: 15, height: 15, resizeMode: 'contain',tintColor:COLOR.primary},
});

export default styles;