import {StyleSheet} from 'react-native';
import { COLOR, commonStyles, FONT} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  selectContainer: {
    width: '90%',
    height: 40,
    backgroundColor: COLOR.whites,
    borderRadius: 16,
    ...commonStyles.horizontalView,
    alignSelf: 'center',
    overflow: 'hidden',
    marginBottom:'4%'
  },
  selectBtn: {width: '34%', ...commonStyles.center, height: 40},
  selectdText: {
    fontSize: 16,
    fontFamily: FONT.Geist_Medium,
    color: COLOR.gray_3,
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
  dialPadIcon: {width: 20, height: 20, resizeMode: 'contain',tintColor:COLOR.white},
  DialPads: {
    backgroundColor: COLOR.perpal,
    width: 48,
    height: 48,
    borderRadius: 30,
    position: 'absolute',
    bottom: '3%',
    alignSelf: 'flex-end',
    right:"7%",
    ...commonStyles.center

  },
});

export default styles;
