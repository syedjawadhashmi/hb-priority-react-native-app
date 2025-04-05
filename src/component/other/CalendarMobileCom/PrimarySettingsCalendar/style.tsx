import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 12,
    fontWeight: '800',
    color: COLOR.gray_5,
    marginBottom: '3%',
  },
  titile: {fontSize: 12, fontWeight: '500', color: COLOR.gray_5},
  discription: {fontSize: 12, fontWeight: '800', color: COLOR.gray_5,},
  switchContainer: {...commonStyles.horizontalView, marginTop: '3%',marginLeft:"2%"},
  button: {
    paddingHorizontal: '5%',
    paddingVertical: '2%',
    borderRadius: 10,
    backgroundColor: COLOR.perpal_3,
    ...commonStyles.verticleView,
  },
  btnText:{fontSize:12,fontWeight:"400",color:COLOR.whites}
});

export default styles;
