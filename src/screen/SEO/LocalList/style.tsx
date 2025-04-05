import {StyleSheet} from 'react-native';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  TabalStatus: {...commonStyles.verticleView, marginTop: '3%'},
  tabalStatusBox: {
    width: '20%',
    height: 27,
    borderBottomWidth: 1.5,
    borderBottomColor: COLOR.gray_5,
    ...commonStyles.center,
  },
  TabalText: {fontSize: 9, fontWeight: '400', color: COLOR.gray_5},
  TabalListContainer: {
    width: '20%',
    height: 42,
    borderBottomWidth: 1.5,
    borderColor: COLOR.gray_5,
    justifyContent: 'center',
  },
  ListText: {fontSize: 7, fontWeight: '400', color: COLOR.gray_5},
  RateDot: {
    width: 5,
    height: 5,
    borderRadius: 15,
    marginRight: '6%',
  },
  TitleText: {
    fontSize: 18,
    fontWeight: '700',
    color: COLOR.gray_5,
    marginLeft: '5%',
    marginTop: '5%',
    marginBottom: '6%',
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
