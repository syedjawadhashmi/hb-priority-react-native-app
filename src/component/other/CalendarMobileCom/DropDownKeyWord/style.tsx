import { StyleSheet } from "react-native";
import { COLOR, commonStyles } from "../../../../themes/StyleGuides";

 export const styles = StyleSheet.create({
    container: {},
    button: {
      width: '90%',
      height: 33,
      alignSelf: 'center',
      paddingHorizontal: '4%',
      backgroundColor: COLOR.whites,
      borderRadius: 12,
      marginBottom: '0.7%',
      ...commonStyles.verticleView,
    },
    openDropDown: {
      position: 'absolute',
      top: 48,
      left: 15,
      right: 0,
      backgroundColor: COLOR.whites,
      zIndex: 1,
      borderWidth: 1,
      borderColor: COLOR.gray,
      borderRadius: 4,
      marginTop: '2%',
      width: '91%',
    },
    buttonText: {
      fontSize: 10,
      color: COLOR.black,
      fontWeight:"400"
      // fontFamily: FONT,
    },
    optionText: {
      fontSize: 13,
      color: COLOR.black,
      // fontFamily: FONT.Poppins_Regular,
      padding: '2%',
    },
    title: {
      fontSize: 12,
      color: COLOR.gray_5,
  
      marginBottom: '1.5%',
      marginTop: '1.5%',
      fontWeight: '700',
    },
    iconStyle: {width: 10, height: 10, resizeMode: 'contain'},
    modalLearn: {
      width: 130,
      height: 70,
      backgroundColor: COLOR.perpal_3,
      position: 'absolute',
      alignSelf: 'flex-end',
      right: '7%',
      ...commonStyles.center,
      borderRadius: 15,
      padding: 10,
      bottom: 55,
    },
    ModelText: {fontSize: 10, fontWeight: '400', color: COLOR.whites},
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    triangleShape: {
      width: 0,
      height: 0,
      borderLeftWidth: 10,
      borderRightWidth: 10,
      borderTopWidth: 18,
      borderStyle: 'solid',
      backgroundColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderTopColor: COLOR.perpal_3,
      position: 'absolute',
      bottom: -13,
      alignSelf: 'flex-start',
      left: '10%',
    },
    selectedText:{fontSize:12,fontWeight:"800",color:COLOR.black}
  });
  