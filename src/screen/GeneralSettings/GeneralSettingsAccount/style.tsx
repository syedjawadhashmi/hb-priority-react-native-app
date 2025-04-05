import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, normalize} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  titleStyle: {
    fontSize: normalize(19),
    fontWeight: '800',
    color: COLOR.gray_5,
    marginLeft: '5%',
    marginTop: '5%',
  },
  discription: {
    fontSize: normalize(12),
    fontWeight: '600',
    color: COLOR.gray_5,
    alignSelf: 'center',
  },
  listItems: {
    width: '38%',
    height: 140,
    backgroundColor: COLOR.whites,
    borderRadius: 10,
    ...commonStyles.center,
    marginHorizontal: '6%',
    marginVertical: '4%',
  },
  itemTitle: {
    fontSize: normalize(16),
    fontWeight: '600',
    color: COLOR.gray_5,
    width: '60%',
    textAlign: 'center',
  },
  iconStyle: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: COLOR.perpal_3,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 24,
    backgroundColor: COLOR.white1,
    ...commonStyles.center,
    marginBottom: '5%',
  },
  bottomBar: {
    width: '100%',
    height: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLOR.primary,
    position: 'absolute',
    bottom: 0,
  },
  arowICon: {width: 40, height: 40, resizeMode: 'contain'},
  ArrowContainer: {
    width: 100,
    height: 50,
    borderRadius: 10,
    backgroundColor: COLOR.primary,
    alignSelf: 'center',
    ...commonStyles.center,
  },
});

export default styles;
