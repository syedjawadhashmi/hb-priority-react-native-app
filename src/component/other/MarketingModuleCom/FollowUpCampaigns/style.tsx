import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, normalize} from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ListContaner: {
    backgroundColor: COLOR.gray_7,
    borderRadius: 10,
    overflow: 'hidden',
    width: '90%',
    alignSelf: 'center',
    marginBottom: '5%',
  },
  Header: {
    width: '100%',
    height: 30,
    backgroundColor: COLOR.perpal_3,
    ...commonStyles.verticleView,
    paddingHorizontal: '2%',
  },
  title: {fontSize: normalize(8), fontWeight: '700', color: COLOR.whites},
  Imges: {width: 18, height: 18, resizeMode: 'contain'},
  name: {
    fontSize: normalize(10),
    fontWeight: '800',
    color: COLOR.gray_5,
  },
});

export default styles;
