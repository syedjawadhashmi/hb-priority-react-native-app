import { StyleSheet, Dimensions } from "react-native";
import { COLOR, TEXT_STYLE, commonStyles  } from "../../../themes/StyleGuides";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.gray_4,
    borderRadius: 15,
    marginBottom: 20,
    width:"100%"
  },
  innerContainer: {
    padding: 10,
  },
  header: {
    backgroundColor: COLOR.perpal, 
    padding: 10,
    borderRadius: 15,
  },
  headerTitle: {
    color: COLOR.white,
  fontSize:16,
  fontWeight:"700"
  },
  headerDescription: {
    ...TEXT_STYLE.text_small,
    color: COLOR.lightBlack,
    marginBottom: 20,
  },
  label: {
    ...TEXT_STYLE.text_small,
    color: COLOR.lightBlack,
    marginBottom: 10,
    marginTop: 10,
    fontWeight: "900",
  },
  description: {
    fontSize:12,
    color: COLOR.lightBlack,
    marginBottom: 10,
    fontWeight: "bold",
  },
  uploadBox: {
    backgroundColor: COLOR.white,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  uploadIconWraper: {
    backgroundColor: COLOR.gray_4,
    padding: 8,
    borderRadius: 100, 
  },
  uploadIcon: {
    width: 30,
    height: 30,
    resizeMode:"center"
  },
  uploadText: {
    ...TEXT_STYLE.text_medium,
    color: COLOR.lightBlack,
    fontWeight: "600",
  },
  clickLink: {
    ...TEXT_STYLE.text_small,
    color: COLOR.perpal,
    marginTop: 5,
    fontWeight: "900",
  },
  uploadSubText: {
  fontSize:12,
    color: COLOR.lightBlack,
  },
  radioGroup: {
    ...commonStyles.horizontalView,
    marginBottom: 16,
    gap: 5,
  },
  radioButton: {
    padding: 6,
    borderWidth: 3,
    borderColor: COLOR.gray_5,
    borderRadius: 100, 
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
    backgroundColor: COLOR.white,
  },
  radioButtonSelected: {
    borderColor: COLOR.primary,
  },
  radioText: {
    ...TEXT_STYLE.text_small,
    color: COLOR.black,
  },
  widgetCustomization: {
    ...commonStyles.horizontalView,
    backgroundColor: COLOR.white,
    borderRadius: 15,
    padding: 10,
    marginBottom: 16,
    justifyContent: "space-between",
    width:'100%',

  },
  widgetImage: {
    width: 80,
    height: 80,
    marginRight: 12,
    resizeMode:"contain",
    bottom:"5%"
  },
  widgetTitle: {
    ...TEXT_STYLE.text_medium,
    fontWeight: "900",
    color: COLOR.perpal,
  },
  widgetDescription: {
    color: COLOR.lightBlack,
    marginBottom: 8,
    fontWeight:"400",

  },
  DropDownButton:{
    
  },
  learnMoreButton: {
    borderRadius: 4,
    paddingVertical: 4,
  },
  learnMoreText: {
    ...TEXT_STYLE.text_small,
    color: COLOR.perpal,
    fontWeight: "900",
  },
  input: {
    backgroundColor: COLOR.white,
    borderRadius: 15,
    padding: 12,
    textAlignVertical: "top",
    minHeight: 100,
    marginBottom: 14,
    ...TEXT_STYLE.text_medium, 
  },
  toggleRow: {
    ...commonStyles.horizontalView,
    alignItems: "center",
    marginBottom:"20%"

  },
  toggleText: {
    ...TEXT_STYLE.text_small,
    color: COLOR.lightBlack,
    marginLeft: 8,
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
