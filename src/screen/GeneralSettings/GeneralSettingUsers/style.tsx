import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, normalize, wp} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  AmmountContainer: {
    width: '90%',
    backgroundColor: COLOR.gray_7,
    alignSelf: 'center',
    borderRadius: 14,
    marginBottom: '5%',
    marginTop: '5%',
  },
  titleContainer: {
    height: 40,
    marginBottom: '2%',
    backgroundColor: COLOR.perpal,
    justifyContent: 'center',
    borderRadius: 14,
    marginLeft: '2%',
  },

  title: {
    fontSize: normalize(16),
    fontWeight: '700',
    color: COLOR.whites,
    marginLeft: '3.6%',
  },
  titleMain: {
    fontSize: normalize(20),
    fontWeight: '800',
    color: COLOR.gray_5,
    marginLeft: '5%',
  },
  FieldStyle: {width: wp("45%"), height: 30,borderRadius:10,fontSize:10},
  dropDown: {
    width: wp("30%"),
    // paddingVertical: '1%',
    borderWidth: 1,
    borderColor: COLOR.perpal_2,
    borderRadius:8,
    paddingHorizontal:"2%",
    // zIndex:0,
    justifyContent:"center"
    
    
    
  },
  DropText:{fontSize:normalize(10),fontWeight:"800",color:COLOR.perpal_2},
  TabalStatus: {...commonStyles.verticleView,marginTop:"3%",width:"90%",alignSelf:"center"},
  tabalStatusBox: {
    width: '17%',
    height: 27,
    backgroundColor: COLOR.perpal,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderLeftColor: COLOR.gray_7,
    borderRightColor:COLOR.gray_7,
    ...commonStyles.center
  },
  TabalText: {fontSize: normalize(9), fontWeight: '400', color: COLOR.gray_5},
  TabalListContainer: { width: '17%',
    height: 30,
    backgroundColor: COLOR.perpal,
    borderWidth: 1,
    borderColor:COLOR.gray_7,
   ...commonStyles.center
},
bottomBar: {
    width: '100%',
    height: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLOR.primary,
    position:"absolute",
    bottom:0
  },
SelectorBtn: {
  ...commonStyles.verticleView,
  width: 100,
  height: 30,
  backgroundColor: COLOR.gray_7,
  borderWidth: 1,
  borderColor: COLOR.perpal_3,
  borderRadius: 20,
  overflow: 'hidden',
},
openDropDown: {
  position: 'absolute',
  top: 35,
  backgroundColor: COLOR.whites,
  zIndex: 1,
  borderWidth: 1,
  borderColor: COLOR.gray,
  borderRadius: 4,
  marginTop: '2%',
  width: 40,
  height:70
},
buttonText: {
  fontSize: 13,
  color: COLOR.whites,
},
optionText: {
  fontSize: 13,
  color: COLOR.black,
  padding: '2%',
},
threeDot:{width:16,height:16,resizeMode:"contain"}
});

export default styles;
