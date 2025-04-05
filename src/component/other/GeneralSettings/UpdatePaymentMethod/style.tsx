import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, normalize, wp} from '../../../../themes/StyleGuides';
import ColorPicker from 'reanimated-color-picker';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.lightBlack,
    ...commonStyles.center,
  },
  modal: {
    width: '90%',
    backgroundColor: COLOR.white1,
    borderRadius: 15,
    paddingVertical:"5%"
  },
  titleContainer: {
    ...commonStyles.verticleView,
    paddingHorizontal: '5%',
    marginTop: '5%',
  },
  title: {fontSize: normalize(20), fontWeight: '800', color: COLOR.gray_5},
  close: {fontSize: normalize(15), fontWeight: '800', color: COLOR.gray_5},
  title_2: {
    fontSize: normalize(12),
    fontWeight: '800',
    color: COLOR.gray_5,
    marginLeft: '6%',
    marginTop: '3%',
  },
  TitleField: {
    fontSize: normalize(12),
    fontWeight: '800',
    color: COLOR.gray_5,
    marginTop: '2%',
  },
  cardStyle: {resizeMode: 'center', width: 20, height: 16,marginHorizontal:1},
  TextFild: {width: wp("40%"), backgroundColor: COLOR.whites},
  textDiscription: {
    fontSize: normalize(12),
    fontWeight: '400',
    color: COLOR.gray_5,
    width: '90%',
    alignSelf: 'center',
    marginTop: '4%',
  },
  btnContainer: {
    ...commonStyles.verticleView,
    alignSelf: 'flex-end',
    marginRight: '5%',
    marginTop: '7%',
  },
  btnStyle: {paddingHorizontal: '4%', paddingVertical: '1.5%', borderRadius: 8},
  btnText: {fontSize: 12, fontWeight: '800', color: COLOR.whites},
});

export default styles;
