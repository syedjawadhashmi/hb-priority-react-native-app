import { StyleSheet } from 'react-native';
import { COLOR, commonStyles } from '../../themes/StyleGuides';

const styles = StyleSheet.create({
 container: {
  ...commonStyles.mainContainer
 },
 CompView:{...commonStyles.verticleView,paddingHorizontal:"3%",marginBottom:"3%"},
 bottomBar: {
    width: '100%',
    height: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLOR.primary,
    position:"absolute",
    bottom:0
  },
  BtnCOnatiner:{alignSelf:"center",width:"90%",marginTop:"5%",marginBottom:"20%"},


});

export default styles;
