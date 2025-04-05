import { StyleSheet } from 'react-native';
import { COLOR, commonStyles, hp, width } from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
 container: {
  
 },
 sattingContainer: {...commonStyles.verticleView, paddingHorizontal: '5%'},
 NewStageBtn: {
   paddingHorizontal: '2%',
   height: 32,
   backgroundColor: COLOR.perpal,
   borderRadius: 7,
   ...commonStyles.center,
 },
 btnText: {fontSize: 10, fontWeight: '700', color: COLOR.whites},
 dropDown: {
   width: 12,
   height: 12,
   resizeMode: 'contain',
   tintColor: COLOR.black,
 },
 TypeText: {fontSize: 10, fontWeight: '700', color: COLOR.perpal},
 filter:{width:25,height:25,resizeMode:"contain",marginLeft:'10%'},
 ExportDown: {
  position: 'absolute',
  backgroundColor: COLOR.whites,
  zIndex: 1,
  borderWidth: 1.3,
  borderColor: COLOR.perpal,
  borderRadius: 14,
  top:hp( '4%'),
  overflow:"hidden",
  marginLeft:width*0.18
},
DropText:{fontSize:11,fontWeight:"500",color:COLOR.perpal},
togalContainer: {
  ...commonStyles.verticleView,
  alignSelf: 'flex-end',
  width:"55%",
  marginRight:"5%",
  marginTop:"4%",
  marginBottom:"30%",
  backgroundColor:"red"
},
titletogal: {
  fontSize: 12,
  fontWeight: '700',
  color: COLOR.gray_5,
},
});

export default styles;
