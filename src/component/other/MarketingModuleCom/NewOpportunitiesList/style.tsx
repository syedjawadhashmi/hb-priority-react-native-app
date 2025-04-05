import { StyleSheet } from 'react-native';
import { COLOR, commonStyles, normalize } from '../../../../themes/StyleGuides';
const styles = StyleSheet.create({
    listContainer: {
      paddingVertical: '5%',
      paddingHorizontal: '5%',
    },
    card: {
      width: '100%',
      backgroundColor: COLOR.white1,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 'auto',
      marginVertical: '2%',
      position:'relative',
    },
    contactInfo: {
      flexDirection: 'row',
      alignItems: "flex-start",
justifyContent:"flex-start"    },
    icon: {
      borderRadius:50,
      marginLeft:'10%',
      width:30,
      height:30,
      resizeMode:"contain",
      alignSelf:"center"
    },
    nameAndIcons:{
        justifyContent:'space-between',
        height:70,
        flexDirection:'column',
        alignItems:'stretch',
        // gap:'2%',
        paddingVertical:'3%'
    },
    contactName: {
      color: COLOR.lightBlack,
      fontSize: normalize(14),
      fontWeight: '900',
      marginLeft: '2%',
    },
    iconsWraper:{
        width:'100%',
        flexDirection:'row',
    },
    actionIcon: {
      width: 22,
      height: 22,
      resizeMode: 'contain',
      marginRight: '15%',
    },
    TaskButtonWRaper:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'flex-end',
        height:'100%',
        marginRight:10,
        marginBottom:20
    },
    taskButton: {
      backgroundColor: COLOR.perpal,
      borderRadius: 9,
      paddingVertical: '2%',
      width:70,
      ...commonStyles.center,
      margin:"2%"
    },
  });
  export default styles;