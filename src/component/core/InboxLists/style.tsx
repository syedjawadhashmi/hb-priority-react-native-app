import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomWidth: 1.4,
    ...commonStyles.horizontalView,
    paddingHorizontal: '4%',
    paddingVertical: '2%',
    borderBottomColor: COLOR.gray,
  },

  secondContainer: {flex: 1, marginLeft: '3%'},
  Icon: {
    width: 27,
    height: 27,
    resizeMode: 'contain',
    // tintColor: COLOR.primary,
  },
  name: {color: COLOR.gray_3, fontSize: 14, fontWeight: '700'},
  time: {
    fontFamily: FONT.Geist_SemiBold,
    color: COLOR.gray,
    fontSize: 12,
    marginRight: '3%',
  },
  title: {
    color: COLOR.gary2,
    fontSize: 11,
    fontStyle: 'italic',
    fontWeight: '700',
  },
  discription: {
    fontWeight: '400',
    color: COLOR.gary2,
    fontSize: 10,
    width: '100%',
    flexWrap: 'wrap',
  },
});

export default styles;
