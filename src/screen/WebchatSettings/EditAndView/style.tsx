import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
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
  selectContainer: {
    width: '100%',
    height: 30,
    backgroundColor: COLOR.white1,
    borderRadius: 10,
    ...commonStyles.verticleView,
    alignSelf: 'center',
    overflow: 'hidden',
    marginBottom: '4%',
    marginTop: '2%',
  },
  selectBtn: {...commonStyles.center, height: 40, width: '49%'},
  selectdText: {
    fontSize: 12,
    fontFamily: FONT.Geist_Medium,
    color: COLOR.black_2,
  },
});

export default styles;
