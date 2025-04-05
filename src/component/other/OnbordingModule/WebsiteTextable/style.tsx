import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, hp} from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  Title: {
    fontSize: 22,
    fontWeight: '700',
    color: COLOR.gray_5,
    width: '50%',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: '10%',
  },
  ContinueBtn: {width: '50%', alignSelf: 'center', marginTop: '3%'},
  logo: {
    width: '60%',
    height: 90,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: '7%',
    marginBottom:hp("10%")
  },
  discription: {
    fontSize: 15,
    fontWeight: '700',
    color: COLOR.gray_5,
    textAlign: 'center',
    width: '90%',
    alignSelf: 'center',
    marginTop: '4%',
  },
  btnStyle: {marginVertical: '2%', width: '90%', marginLeft: '2%'},
  IconCrose: {width: 10, height: 10, resizeMode: 'contain'},
  http: {fontSize: 12, fontWeight: '700', color: COLOR.gray_5},
  HttpContainer: {...commonStyles.verticleView, paddingHorizontal: '17%'},
  webView: {width: 230, height: 200, alignSelf: 'center'},
  overlay: {
    width: 80,
    height: 150,
    resizeMode: 'contain',
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 40,
    marginTop: '22%',
  },
});

export default styles;
