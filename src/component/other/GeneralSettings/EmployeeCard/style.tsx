import { StyleSheet } from 'react-native';
import { COLOR, commonStyles, FONT } from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
 container: {
  
 },
 row: {
 ...commonStyles.verticleView,

    
  },
  label: {
    color: COLOR.white,
    fontFamily: FONT.Geist_Medium,
    textAlign: 'center',
    width: '30%',
    borderBottomWidth:2,
    borderColor: COLOR.white1,
    display:"flex",
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:10
  },
  labelBg: {
    backgroundColor: COLOR.perpal,
  },
  value: {
    color: COLOR.black,
    width: '70%',
    fontFamily: FONT.Geist_Regular,
    paddingHorizontal:10,
    display:'flex',
    paddingVertical:10
  },
  actions: {
    color: COLOR.black,
    width: '70%',
    fontFamily: FONT.Geist_Regular,
    paddingHorizontal:10,
    flexDirection:'row',
    paddingVertical:10
  },
  iconButton: {
    marginRight: 10,
  },
  icon: {
    color: COLOR.black,
    width:15,
    height:15,
  },
  evenChild:{
   
  },
  oddChild:{
  },
  card: {
    backgroundColor: COLOR.white,
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal:5,
    overflow: 'hidden',
  },
});

export default styles;
