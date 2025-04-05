import { StyleSheet } from 'react-native';
import { COLOR, commonStyles, FONT, normalize } from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
 container: {
  ...commonStyles.mainContainer
 },
 AmmountContainer: {
    width: '90%',
    backgroundColor: COLOR.gray_7,
    alignSelf: 'center',
    borderRadius: 14,
    marginBottom: '5%',
    marginTop:"5%"
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
  selectContainer: {
    width: '100%',
    height: 30,
    backgroundColor: COLOR.white1,
    borderRadius: 10,
    ...commonStyles.verticleView,
    alignSelf: 'center',
    overflow: 'hidden',
    marginBottom: '4%',
    marginTop:"2%"
  },
  selectBtn: {...commonStyles.center, height: 40, width: '49%'},
  selectdText: {
    fontSize: normalize(12),
    fontFamily: FONT.Geist_Medium,
    color: COLOR.black_2,
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
