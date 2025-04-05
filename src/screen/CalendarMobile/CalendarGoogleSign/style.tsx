import {StyleSheet} from 'react-native';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {...commonStyles.mainContainer},
  ImagesGoogle: {width: 40, height: 40, resizeMode: 'contain'},
  imagesContaoner: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    backgroundColor: COLOR.gray_7,
    borderRadius: 50,
    ...commonStyles.center,
    alignSelf: 'center',
    marginTop: '8%',
  },
  textStyle: {
    fontSize: 12,
    fontWeight: '400',
    color: COLOR.gray_5,
    alignSelf: 'center',
    marginTop: '6%',
  },
  btnStyle: {
    paddingHorizontal: '5%',
    paddingVertical: '3%',
    borderRadius: 10,
    backgroundColor: COLOR.perpal_3,
    ...commonStyles.center,
    alignSelf:"center",
    marginTop:"5%",
    marginBottom:"15%"
  },
  btnText:{fontSize:12,fontWeight:"800",color:COLOR.whites},
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
