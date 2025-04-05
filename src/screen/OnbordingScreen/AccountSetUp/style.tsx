import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, hp, wp} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  HeaderContainer: {
    backgroundColor: COLOR.gray_4,
    ...commonStyles.center,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 50,
  },
  HeaderText: {
    fontSize: 21,
    fontWeight: '700',
    color: COLOR.gray_5,
    alignSelf: 'center',
  },
  indecatorContainer: {
    width: '90%',
    height: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: COLOR.gray_5,
    alignSelf:"center",
    ...commonStyles.verticleView,
    overflow:"hidden",
    marginTop:"5%"

  },
  box:{width:wp(6.5),height:hp(5)},
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
