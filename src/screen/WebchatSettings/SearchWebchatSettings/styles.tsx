import { StyleSheet } from "react-native";
import { COLOR, commonStyles } from "../../../themes/StyleGuides";

const styles = StyleSheet.create({
    container: {
   ...commonStyles.mainContainer
    },
    header: {
      marginBottom:"5%",
      marginTop:"4%"
    },
    searchIcon:{
      width:20,
      height:20,
      tintColor:COLOR.gray,
      resizeMode:"contain"
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: "800",
      color: COLOR.lightBlack,
      marginBottom: 10,
    },
    searchCreateContainer: {
    ...commonStyles.verticleView
    },
    searchBar: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: COLOR.whites,
      borderRadius: 15,
      paddingHorizontal: 12,
      height: 36,
      flex: 1,
      marginRight: 8,
    },
    searchInput: {
      marginLeft: 8,
      fontSize: 12,
      color: COLOR.black,
      flex: 1,
    },
    createButton: {
      backgroundColor: COLOR.perpal,
      borderRadius: 15,
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
    createButtonText: {
      color: COLOR.white,
      fontSize: 12,
      fontWeight: "bold",
    },
    tableHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: COLOR.perpal,
      paddingHorizontal: 16,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
    tableHeaderText: {
      color: COLOR.white,
      fontSize: 14,
      fontWeight: "bold",
      paddingLeft:10,
    },
    tableHeaderTextLeft:{
      borderRightWidth:1,
      borderRightColor:COLOR.gray_4,
      paddingVertical:5,
      width:'40%'
    },
    tableHeaderTextRight:{
      paddingVertical:"3%",
      width:'60%'
    },
    table: {
      backgroundColor: COLOR.white,
      borderBottomLeftRadius: 2,
      borderBottomRightRadius: 2,
      overflow: "hidden",
    },
    evenItem: {
      backgroundColor: '#f5f5f5',
    },
    tableRow: {
  ...commonStyles.verticleView,
      paddingHorizontal: "5%",
      borderBottomWidth: 1,
      borderBottomColor:COLOR.gray_11,
      backgroundColor:COLOR.whites
    },
    widgetDetails: {
      borderRightWidth: 2,
      borderRightColor: '#cccccc',
      paddingRight: 16,
      paddingLeft:10,
      paddingVertical:5,
      width:'40%'
    },
    widgetName: {
      fontSize: 12,
      color: COLOR.perpal,
      fontWeight:"400"
    },
    widgetLocation: {
      fontSize: 12,
      color: COLOR.lightBlack,
    },
    widgetStatusContainer: {
      width:'60%',
      flexDirection: "row",
      alignItems: "center",
      justifyContent: 'space-between',
      paddingLeft:10
    },
    widgetStatus: {
      fontSize: 14,
      color: COLOR.lightBlack,
      marginRight: 8,
    },
    dotsStyling:{
        width:5,
        height:18,
        resizeMode:"contain"
        
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

  });
  export default styles;
  