import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, normalize} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    alignSelf: 'center',
    backgroundColor: COLOR.whites,
    overflow: 'hidden',
    marginBottom: '5%',
  },
  title: {fontSize: normalize(12), fontWeight: '700', color: COLOR.whites},
  balance: {fontSize: normalize(22), fontWeight: '700', color: COLOR.whites},
  titleContainer: {
    ...commonStyles.verticleView,
    paddingHorizontal: '5%',
    backgroundColor: COLOR.perpal_3,
    height: 60,
    width: '100%',
  },
  callsStyle: {fontSize: normalize(10), fontWeight: '400', color: COLOR.gray_5},
  CallsContainer: {
    ...commonStyles.verticleView,
    paddingHorizontal: '5%',
    height: 25,
  },
});

export default styles;
