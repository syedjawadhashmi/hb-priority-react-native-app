import { StyleSheet } from "react-native";
import {  COLOR, commonStyles, TEXT_STYLE } from "../../../themes/StyleGuides";

const styles = StyleSheet.create({
  mainContainer:{...commonStyles.mainContainer,},
    container: {
      flex: 1,
      backgroundColor: COLOR.gray_4,
      borderRadius:15,  
      overflow: 'hidden',
      margin:10
  },
    header: {
      backgroundColor: COLOR.perpal,
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      borderRadius:15,
    },
    headerText: {
      color: COLOR.white,
      fontSize: 15,
      fontWeight:'900',
    },
    appointmentContainer: {
      paddingVertical: 15,
      borderBottomWidth:1,
      borderBottomColor:COLOR.white,
      paddingHorizontal: 20,
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
      marginBottom: 20,
    },
    timeText: {
      color: COLOR.lightBlack,
      fontSize: 12,
      fontWeight:'900',
      marginBottom: 10,
    },
    button: {
      backgroundColor: COLOR.perpal,
      borderRadius: 15,
      paddingVertical: 8,
      paddingHorizontal: 20,
      alignSelf: 'flex-start',
    },
    buttonText: {
      color: COLOR.white,
      fontSize: 14,
      fontWeight:'900', 
    },
    section: {
      marginBottom: 20,
    
      paddingBottom:10,
  
      paddingHorizontal: 20,
    },
    sectionTitleWraper:{
      flexDirection:'row',
      gap:5,
    },
    sectionTitle: {
      color: COLOR.perpal,
      fontSize: 15,
      fontWeight:'900',
      marginBottom: 10,
    },
    subText1: {
      color: COLOR.lightBlack,
      fontSize: 16,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 25,
      backgroundColor: COLOR.perpal,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 15,
    },
    avatarText: {
      color: COLOR.white,
      fontSize: TEXT_STYLE.subTitle.fontSize,
      fontFamily: TEXT_STYLE.subTitle.fontFamily,
    },
    contactName: {
      color: COLOR.lightBlack,
      fontSize: 15,
      fontWeight:'900',
      marginBottom: 5,
      
    },
    subText: {
      color: COLOR.lightBlack,
      fontSize:15,
      fontWeight:'900',
      marginLeft:20
    },
    pickerContainer: {
      backgroundColor: COLOR.white,
      borderRadius: 8,
      overflow: 'hidden',
    },
    picker: {
      color: COLOR.black,
      fontSize: TEXT_STYLE.text_medium.fontSize,
      fontFamily: TEXT_STYLE.text_medium.fontFamily,
      padding: 10,
    },
  });
  export default styles;