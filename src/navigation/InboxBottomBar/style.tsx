import { StyleSheet } from "react-native";
import { FONT,COLOR } from "../../themes/StyleGuides";

 export const styles = StyleSheet.create({
    imageStyle: {
      width: 22,
      height: 22,
      resizeMode: 'contain',
      marginBottom: '2%',
    },
    titleSTyle: {
      fontSize: 14,
      fontFamily: FONT.Geist_Regular,
      color: COLOR.black,
    },
    container: {alignItems: 'center'},
  });
  