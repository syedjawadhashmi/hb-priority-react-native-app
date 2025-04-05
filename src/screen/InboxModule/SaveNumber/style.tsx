import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  userIconContainer: {
    backgroundColor: COLOR.perpal,
    borderWidth: 10,
    borderColor: COLOR.gray_4,
    ...commonStyles.center,
    borderRadius: 50,
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: '18%',
  },
  TextInputContainer: {
    marginTop: '10%',
  },
  userIcon: {
    width: 50,
    height: 50,
    tintColor: COLOR.whites,
    resizeMode: 'contain',
  },
  inputStyle: {height: 40, paddingHorizontal: '4%', marginVertical: 0},
  IconStyle: {width: 23, height: 23, resizeMode: 'contain'},
  stylebtnSave: {
    width: '35%',
    backgroundColor: COLOR.primary,
    height: 40,
    borderRadius: 20,
    ...commonStyles.center,
  },
  btnContainer: {
    ...commonStyles.verticleView,
    paddingHorizontal: '6%',
    marginTop: '45%',
    marginBottom: '10%',
  },
  btnText: {
    fontSize: 18,
    fontFamily: FONT.Geist_SemiBold,
    color: COLOR.black_2,
  },
});

export default styles;
