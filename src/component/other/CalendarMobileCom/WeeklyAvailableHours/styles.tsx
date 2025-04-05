import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.verticleView,
    width: '90%',
    marginVertical:"2%"
  },
  checkBox: {width: 20, height: 20, resizeMode: "center"},
  day: {fontSize: 12, fontWeight: '800', color: COLOR.gray_5,width:30},
  field: {
    width: 70,
    height: 35,
    borderRadius: 10,
    backgroundColor: COLOR.whites,
    ...commonStyles.center,
    marginHorizontal:'1%'
  },
  plus: {width: 15, height: 15, resizeMode: "contain",tintColor:COLOR.gray_5},
  Delete: {width: 20, height: 20, resizeMode: "contain"},
  time:{fontSize:10,fontWeight:"400",color:COLOR.gray_5}


});

export default styles;
