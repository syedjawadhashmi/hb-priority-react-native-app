import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  selectContainer: {
    width: '90%',
    height: 45,
    backgroundColor: COLOR.white1,
    borderRadius: 16,
    ...commonStyles.verticleView,
    alignSelf: 'center',
    overflow: 'hidden',
    marginBottom: '4%',
    marginTop: '3%',
  },
  selectBtn: {width: '32.5%', ...commonStyles.center, height: 45},
  selectdText: {
    fontSize: 14,
    color: COLOR.gray_3,
    fontWeight: '400',
    textAlign: 'center',
    // width: '80%',
  },

  listContainer: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    backgroundColor: 'red',
    marginHorizontal: '3%',
    marginVertical: '3%',
    borderRadius: 109,
    justifyContent: 'flex-end',
  },
  Conatines: {alignSelf: 'center', marginTop: '5%'},
  ListTitle: {fontSize: 14, color: COLOR.white, marginLeft: '7%', bottom: '6%'},
  dialPadIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: COLOR.white,
  },
  DialPads: {
    backgroundColor: COLOR.perpal,
    width: 48,
    height: 48,
    borderRadius: 30,
    position: 'absolute',
    bottom: '3%',
    alignSelf: 'flex-end',
    right: '7%',
    ...commonStyles.center,
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
