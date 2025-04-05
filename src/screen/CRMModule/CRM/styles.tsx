import { StyleSheet } from 'react-native';
import { COLOR, commonStyles, FONT } from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
 container: {
  ...commonStyles.mainContainer,
  // backgroundColor:"red"
 },
 selectContainer: {
    width: '90%',
    height: 45,
    backgroundColor: COLOR.white1,
    borderRadius: 16,
    ...commonStyles.verticleView,
    alignSelf: 'center',
    overflow: 'hidden',
    marginBottom:'2%',
    marginTop:"5%"
  },
  selectBtn: {width: '32.5%', ...commonStyles.center, height: 45},
  selectdText: {
    fontSize: 14,
    fontFamily: FONT.Geist_Medium,
    color: COLOR.gray_3,
  },
  bottomBar: {
    width: '100%',
    height: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLOR.primary,
    position:"absolute",
    bottom:0
  },

});

export default styles;
