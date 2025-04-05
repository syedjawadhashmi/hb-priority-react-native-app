import { StyleSheet } from 'react-native';
import { COLOR, commonStyles } from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
 container: {
  ...commonStyles.mainContainer
 },
 map: {
    width: '90%',
    height: 200,
    alignSelf: 'center',
  },
  RangingShow: {
    width: 25,
    height: 25,
    borderRadius: 15,
    ...commonStyles.center,
    margin: '1.5%',
  },
  RangingShowText: {fontSize: 15, fontWeight: '700', color: COLOR.whites},
  scrollContainer: {
    overflow: 'hidden',
    width: 304,
    height: 60,
  },

});

export default styles;
