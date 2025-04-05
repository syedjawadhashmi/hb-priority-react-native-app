import {StyleSheet} from 'react-native';
import {COLOR, commonStyles} from '../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  Btn: {
    width: '90%',
    height: 55,
    backgroundColor: COLOR.primary,
    borderRadius: 10,
    ...commonStyles.center,
    alignSelf:"center",
    marginTop:"5%"
  },
  BtnText: {fontSize: 20, fontWeight: '700', color: COLOR.whites},
});

export default styles;
