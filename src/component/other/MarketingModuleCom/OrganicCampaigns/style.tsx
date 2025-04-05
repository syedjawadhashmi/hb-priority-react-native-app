import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, normalize} from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Header: {
    width: '100%',
    height: 30,
    backgroundColor: COLOR.perpal_3,
    ...commonStyles.horizontalView,
    paddingHorizontal: '2%',
  },
  title: {fontSize: normalize(9), fontWeight: '700', color: COLOR.whites},
  Imges: {width: 18, height: 18, resizeMode: 'contain'},
  name: {
    fontSize: normalize(11),
    fontWeight: '800',
    color: COLOR.gray_5,
    marginLeft: '5%',
  },
});

export default styles;
