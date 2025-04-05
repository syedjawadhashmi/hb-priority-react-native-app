import { StyleSheet } from "react-native";
import { COLOR, commonStyles } from "../../../../themes/StyleGuides";

const styles = StyleSheet.create({
    timeSlotContainer: {
        ...commonStyles.horizontalView,
       },
       slotInput: {
        padding: 8,
        borderRadius: 5,
        textAlign: "center",
        width: 80,
        color:COLOR.lightBlack
      },
      inputLeft: {
        marginRight: 3,
        borderRadius: 10,
        backgroundColor:COLOR.white
      },
      inputRight: {
        marginLeft: 3,
        borderRadius: 10,
        backgroundColor:COLOR.white
      },
});
export default styles;