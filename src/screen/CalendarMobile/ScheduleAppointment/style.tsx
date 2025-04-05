import { StyleSheet } from "react-native";
import { COLOR, commonStyles } from "../../../themes/StyleGuides";

export const styles= StyleSheet.create({
  container: {
  ...commonStyles.mainContainer
  },
  header: {
    backgroundColor: COLOR.perpal,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  headerTitle: {
    color: COLOR.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  MainContainer: {
    backgroundColor: COLOR.gray_4,
    paddingBottom: 20,
    margin: 10
  },
  saveButtonContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
    width: '100%',
    flexDirection:'row',
    justifyContent:'flex-end',
    marginBottom:"25%"
  },
  saveButton: {
    backgroundColor: '#40f440',
    color: COLOR.white,
    paddingVertical: 10,
    borderRadius: 8,
    fontWeight: "bold",
    width:'20%',
  },
  saveButtonText: {
    color: COLOR.lightBlack,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16
  },
  note: {
    flexDirection: 'row',
    gap: 10,
    width: '90%',
    marginVertical: 10,
    marginHorizontal: 10,
    fontWeight: 'bold'
  },
  noteText: {
    color: COLOR.lightBlack,
    fontSize: 12,
    fontWeight: '800'
  },
  noteIcon: {
    width: 20,
    height: 20,
    resizeMode:"contain"
  },
  input: {
    borderRadius: 15,
    padding: 10,
    marginVertical: 10,
    backgroundColor: COLOR.white
  }
});
