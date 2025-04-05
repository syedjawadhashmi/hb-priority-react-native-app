import { StyleSheet, Dimensions } from 'react-native';
import { COLOR, normalize } from '../../../../themes/StyleGuides';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: COLOR.lightBlack,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: width * 0.9,
    backgroundColor:COLOR.white1,
    borderRadius: 10,
    padding: 20,
    maxHeight: '95%',
  },
  headerText: {
    fontSize: normalize(20),
    fontWeight: "900",
    color: COLOR.gray_5,
    width:"50%",
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    width:'100%',
  },
  addButton: {
    backgroundColor: '#40f440',
    borderRadius: 5,
    fontSize:normalize(15),
    textAlign:'center',
    width:"50%",
    paddingHorizontal:5,
    paddingVertical:5,
    fontWeight:"900",
  },
  cancelButton: {
    backgroundColor: '#ba0416',
    paddingHorizontal:5,
    width:"50%",
    paddingVertical:5,
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    textAlign:'center'
  },
  formContainer: {
    marginTop: 10,
    marginBottom:20
  },
  locationDropDown:{
    position:'relative',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  column:{
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  input: {
    flex: 1,
    height:35,
    borderRadius: 15,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    marginBottom: 10,
    marginRight: 5,
    fontSize: 12,
    display:'flex',
    alignItems:'center',
    color:COLOR.black
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  switchText: {
    flex: 1,
    fontSize: normalize(12),
    fontWeight: "900",
    color: COLOR.gray_5,
  },
  sectionTitle: {
    fontSize: normalize(12),
    fontWeight: "900",
    color: COLOR.gray_5,
    marginTop: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  checkbox: {
    marginRight: 5,
  },
  checkboxText: {
    fontSize: 16,
  },
  subText: {
    fontSize: 11,
    color: '#666',
    marginBottom: 10,
  },
  linkText: {
    color: COLOR.perpal,
    textDecorationLine: 'underline',
  },
  radioButtonSelected: {
    flex: 1,
    backgroundColor: '#58e84c',
    paddingVertical: 8,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  radioButton: {
    flex: 1,
    backgroundColor: '#d0d2d9',
    paddingVertical: 8,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  radioText: {
    fontSize: 14,
    color: '#fff',
  },
});

export default styles;
