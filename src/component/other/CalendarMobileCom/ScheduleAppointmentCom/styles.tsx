import { StyleSheet } from "react-native";
import { COLOR } from "../../../../themes/StyleGuides";

export const styles = StyleSheet.create({
  // GroupButtons Styles
  groupButtons: {
    container: {
      flexDirection: "row",
      justifyContent: "center",
      marginVertical: 10,
    },
    buttonWrapper: {
      borderRadius: 15,
      flexDirection: "row",
      justifyContent: "center",
    },
    button: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 15,
      backgroundColor: COLOR.gray_4,
      marginHorizontal: 5,
    },
    activeButton: {
      backgroundColor: COLOR.perpal,
    },
    buttonText: {
      color: COLOR.white,
      fontSize: 14,
    },
    activeButtonText: {
      color: COLOR.white,
      fontWeight: "bold",
    },
  },

  // DropdownField Styles
  dropdownField: {
    container: {
      marginVertical: 10,
    },
    label: {
      fontSize: 14,
      color: COLOR.lightBlack,
      marginBottom: 5,
    },
    dropdown: {
      backgroundColor: COLOR.white,
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    selectedText: {
      fontSize: 14,
      color: COLOR.lightBlack,
    },
    dropdownContainer: {
      position: "absolute",
      top: "100%",
      width: "100%",
      backgroundColor: COLOR.white,
      zIndex: 2,
      borderRadius: 10,
      paddingTop: 10,
    },
    searchInput: {
      backgroundColor: COLOR.gray_4,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 10,
      marginBottom: 10,
    },
    optionsList: {
      maxHeight: 200,
    },
    option: {
      paddingVertical: 10,
      paddingHorizontal: 15,
    },
    optionText: {
      color: COLOR.black,
      fontSize: 14,
    },
    sectionHeader: {
      fontWeight: "bold",
      color: COLOR.perpal,
      paddingHorizontal: 15,
    },
  },

  // DropdownTimezone Styles
  dropdownTimezone: {
    container: {
      marginVertical: 10,
    },
    label: {
      fontSize: 14,
      color: COLOR.lightBlack,
      marginBottom: 5,
    },
    dropdown: {
      backgroundColor: COLOR.white,
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    selectedText: {
      fontSize: 14,
      color: COLOR.lightBlack,
    },
    dropdownContainer: {
      position: "absolute",
      top: "100%",
      width: "100%",
      backgroundColor: COLOR.white,
      zIndex: 2,
      borderRadius: 10,
      paddingTop: 10,
    },
    searchInput: {
      backgroundColor: COLOR.gray_4,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 10,
      marginBottom: 10,
    },
    optionsList: {
      maxHeight: 300,
    },
    option: {
      paddingVertical: 10,
      paddingHorizontal: 15,
    },
    optionText: {
      color: COLOR.black,
      fontSize: 14,
    },
    sectionHeader: {
      fontWeight: "bold",
      color: COLOR.perpal,
      paddingHorizontal: 15,
    },
  },

  // Header Styles
  header: {
    container: {
      backgroundColor: COLOR.perpal,
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 15,
    },
    title: {
      color: COLOR.white,
      fontSize: 18,
      fontWeight: "bold",
    },
  },

  // InputField Styles
  inputField: {
    container: {
      marginVertical: 15,
      paddingHorizontal: 20,
    },
    label: {
      fontSize: 14,
      color: COLOR.lightBlack,
      marginBottom: 5,
    },
    icon: {
      width: 21,
      height: 22,
      position: "absolute",
      top: 10,
      left: 10,
      zIndex: 1,
    },
    input: {
      borderRadius: 15,
      padding: 10,
      paddingLeft: 40,
      backgroundColor: COLOR.white,
      color: COLOR.black,
    },
    selectedDrop: {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
    dropdownIcon: {
      color: COLOR.lightBlack,
      marginRight: 5,
      position: "absolute",
      right: 10,
      top: 10,
    },
  },
});
