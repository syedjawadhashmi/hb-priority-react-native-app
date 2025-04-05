import {StyleSheet} from 'react-native';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  TitleText: {
    fontSize: 18,
    fontWeight: '700',
    color: COLOR.gray_5,
    marginLeft: '5%',
    marginTop: '10%',
    marginBottom: '10%',
  },
  map: {
    width: '90%',
    height: 200,
    alignSelf: 'center',
  },
  btnAndTextInput: {
    ...commonStyles.verticleView,
    alignSelf: 'center',
    width: '70%',
  },
  firstbtn: {paddingHorizontal: '5%', paddingVertical: '2%', borderRadius: 7},
  btnText: {fontSize: 12, fontWeight: '700'},
  Textinputs: {
    width: '78%',
    height: 30,
    backgroundColor: COLOR.whites,
    borderRadius: 10,
    padding: 0,
    color: COLOR.gray_5,
    paddingHorizontal: 5,
  },
  InputTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: COLOR.gray_5,
    marginLeft: '16%',
    marginTop: '15%',
    marginBottom: '2%',
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
  keywordItem: {
    paddingHorizontal: 7,
    paddingVertical: 3,
    backgroundColor: COLOR.gray_7,
    borderRadius: 10,
    ...commonStyles.horizontalView,
    marginLeft:5
  },
  keywordText: {fontSize: 8, fontWeight: '700', color: COLOR.gray_5},
  RangingShow: {
    width: 25,
    height: 25,
    borderRadius: 15,
    ...commonStyles.center,
    margin: '1.5%',
  },
  RangingShowText: {fontSize: 15, fontWeight: '700', color: COLOR.whites},
});

export default styles;
