import { StyleSheet } from "react-native";
import { COLOR } from "../../../../themes/StyleGuides";

const styles = StyleSheet.create({
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      width: '80%',
      backgroundColor: '#f4f4f4',
      borderRadius: 10,
      padding: 15,
      height:170,
      position: 'relative',
    },
    closeButton: {
      position: 'absolute',
      top: 10,
      padding:2,
      borderRadius: 5,
      right: 10,
    },
    label: {
      fontSize: 12,
      fontWeight: "800",
      marginBottom: 10,
      color:COLOR.gray_5,
      marginTop:"10%",
      marginLeft:"1%"
    },
    accordionButton: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: '#FFFFFF',
      position: 'relative',
      borderRadius:8,
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
    selectedTypeText: {
      fontSize: 10,
      color: '#333',
    },
    accordionContent: {
      backgroundColor: '#FFFFFF',
      borderBottomEndRadius:8,
      borderBottomStartRadius:8,
    },
    accordionItem: {
      paddingVertical: "1%",
    },
    accordionItemText: {
      fontSize: 10,
      color: '#333',
    },
  });
  export default styles;