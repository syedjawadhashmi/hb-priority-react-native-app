import { StyleSheet } from "react-native";
import { COLOR } from "../../../themes/StyleGuides";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLOR.gray_4,
        margin: '5%',
        borderRadius: 10,
        flex: 1,
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
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
