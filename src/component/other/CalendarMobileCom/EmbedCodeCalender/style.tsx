import { StyleSheet } from "react-native";
import { COLOR, normalize, TEXT_STYLE } from "../../../../themes/StyleGuides";

const styles = StyleSheet.create({
    modalContainer: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      justifyContent: 'center',
      alignItems: 'center',
      height:'100%',
      padding:10
    },
    modalContent: {
      backgroundColor: COLOR.gray_4,
      borderRadius: 10,
      padding: 20,
      width:'95%'
    },
    permanentLinkContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      width:'100%',
      justifyContent:'space-between',
      marginTop: 10,
    },
    permanentText: {
      ...TEXT_STYLE.text_medium,
      color: COLOR.gray_5,
      flex:1,
      marginRight: 10,
      backgroundColor:COLOR.white,
      borderRadius:15,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: COLOR.gray_7,
      paddingBottom: 10,
    },
    headerText: {
      fontWeight:'bold',
      fontSize: 18,
      color: COLOR.lightBlack,
    },
    closeButton: {
      fontSize: 18,
      color: COLOR.gray_6,
    },
    tabsContainer: {
      flexDirection: 'row',
      marginVertical: 10,
      gap:10
    },
    tabButton: {
      paddingVertical: 10,
      alignItems: 'center',
      borderBottomWidth: 2,
      borderBottomColor: 'transparent',
    },
    activeTab: {
      borderBottomColor: COLOR.perpal,
    },
    tabText: {
      fontSize:12,
      fontWeight:'bold',
      color: COLOR.lightBlack,
    },
    activeTabText: {
      color: COLOR.perpal,
      fontWeight:'bold',
    },
    contentContainer: {
      marginTop: 5,
    },
    title: {
      fontSize:16,
      fontWeight:'bold',
      color: COLOR.lightBlack,
      marginBottom: 5,
    },
    OneTimeLink:{
        fontSize:12,
        fontWeight:'bold',
        color: COLOR.lightBlack,
    },
    linkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        width:'100%',
        justifyContent:'space-between',
        marginTop: 10,
    },
    input: {
        ...TEXT_STYLE.text_medium,
        color: COLOR.gray_5,
        flex:1,
        marginRight: 10,
        backgroundColor:COLOR.white,
        borderRadius:15,
    },
    inputEmbedCode:{
        borderWidth: 1,
        borderColor: COLOR.gray_7,
        borderRadius: 15,
        textAlign:'auto',
        marginRight: 10,
        backgroundColor: COLOR.white1,
        maxHeight:150,
        height:150,
        width:'100%',
        overflow:'scroll',
        padding:10,
        fontSize:normalize(12)
    },
    copyButton: {
      backgroundColor: COLOR.primary,
      borderRadius: 15,
      paddingHorizontal:15,
      paddingVertical:10,
      alignSelf:"flex-end"
      
    },
    copyText: {
      color: COLOR.lightBlack,
      fontWeight: 'bold',
    },
    description: {
      fontSize:12,
      color: COLOR.gray_5,
      marginTop: 2,
      marginBottom: 10,
    },
    generateButton: {
      borderRadius: 5,
      flexDirection:'row',
      gap:5,
      alignItems:'center',
      padding: 10,
      marginTop:2
    },
    generateButtonText: {
      color: COLOR.perpal,
      fontWeight: 'bold',
    },
    embedContainer: {
      flexDirection: 'column',
      gap:10,
      alignItems: 'center',
      marginBottom: 10,
    },
  });
  export default styles;