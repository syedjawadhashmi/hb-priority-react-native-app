import {StyleSheet} from 'react-native';
import { COLOR, commonStyles } from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  fistContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  secondContainer: {
    flex: 4,
  },
  userAdd: {width: 24, height: 24, resizeMode: 'contain', marginRight: '5%'},
  inputContainer: {
    height: 55,
    backgroundColor: COLOR.gray_7,
    marginBottom: '13%',
    ...commonStyles.center
  },
  inputStyle: {fontSize: 20, color: COLOR.gray_5},
  buttonContainer: {
    ...commonStyles.verticleView,
    paddingHorizontal: '14%',
    marginVertical: '5%',
  },
  buttonStyle: {
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: COLOR.perpal,
    ...commonStyles.center,
  },
  Symbol: {width: 15, height: 15, resizeMode: 'contain'},
  btnText: {fontSize: 23, color: COLOR.white1, fontWeight: '800'},
  text: {
    fontSize: 10,
    color: COLOR.white1,
    fontWeight: '800',
    bottom: 3,
  },
  phone: {
    width: 30,
    height: 30,
    resizeMode: 'center',
  },
});

export default styles;
