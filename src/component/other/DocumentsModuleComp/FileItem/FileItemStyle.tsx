import { StyleSheet } from "react-native";
import { COLOR, normalize } from "../../../../themes/StyleGuides";

const styles = StyleSheet.create({
    container: {
      marginHorizontal: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 8,
      paddingHorizontal: 8,
      backgroundColor: '#e0e0e0',
      borderRadius: 8,
      marginBottom: "3%",
      elevation: 1,
    },
    name: {
      marginLeft: 8,
      color: '#6d6d6d',
      fontSize: normalize(12),
      fontWeight: "900",
    },
    docIcon:{width:17,height:17,resizeMode:"contain",tintColor:COLOR.perpal_3}
  });
  export default styles;