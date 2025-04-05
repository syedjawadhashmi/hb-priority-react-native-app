import {StyleSheet} from 'react-native';
import { COLOR, commonStyles, FONT } from '../../themes/StyleGuides';

export const styles = StyleSheet.create({
  container: {
     flex: 1,
     resizeMode: 'cover',
   },
   Logo: {fontFamily: FONT.Geist_Bold, fontSize: 30, color: COLOR.primary},
});
