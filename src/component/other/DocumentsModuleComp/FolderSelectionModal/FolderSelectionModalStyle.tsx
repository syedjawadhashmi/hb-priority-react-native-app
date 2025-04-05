import { StyleSheet } from "react-native";
import { COLOR } from "../../../../themes/StyleGuides";

const styles = StyleSheet.create({
    modalOverlay: {
      flex: 1,
      backgroundColor: COLOR.lightBlack,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    modalContent: {
      width: '85%',
      backgroundColor:COLOR.whites,
      borderRadius: 10,
      padding: 10,
      paddingHorizontal:20,
      position: 'relative',
      alignItems: 'center',
    },
    closeButton: {
      position: 'absolute',
      top: 10,
      right: 10,
      borderRadius: 5,
      padding: 5,
      zIndex: 10,
    },
    successSection: {
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: 15,
    },
    successText: {
      fontSize: 14, 
      fontWeight: "600",
      color:COLOR.gray_5,
      marginTop:"1%"
    },
    documentSection: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: COLOR.gray_7,
      borderRadius: 18,
      paddingVertical: 8,
      paddingHorizontal: 8,
      width: '100%',
      marginBottom: 10,
    },
    documentNameText: {
      fontSize: 12,
      color: '#333',
      marginLeft: 10,
    },
    chooseFolderText: {
      fontSize: 14,
      fontWeight: '500',
      color: COLOR.gray_5,
      alignSelf: 'flex-start',
    },
    folderOptions: {
      width: '100%',
      flexDirection: 'row',
      // alignItems: 'center',
      gap: 5,
    },
    folderOption: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
      paddingVertical: 5,
    },
    folderOptionText: {
      fontSize: 10,
      color: COLOR.perpal_3,
      marginLeft: 3,
      fontWeight: "500"
    },
    iconStyle:{width:13,height:13,resizeMode:"contain",},
    plusStyle:{width:10,height:10,resizeMode:"contain",},

    plusContainer:{padding:"2%",borderRadius:10,backgroundColor:COLOR.white1}
  });
  export default styles;