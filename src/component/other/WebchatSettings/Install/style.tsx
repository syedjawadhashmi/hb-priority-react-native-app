import {StyleSheet} from 'react-native';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {},
  tittle: {
    fontSize: 14,
    fontWeight: '800',
    color: COLOR.perpal_3,
    marginLeft: '5%',
  },
  discription: {
    fontSize: 10,
    fontWeight: '800',
    color: COLOR.gray_5,
    width: '85%',
    marginLeft: '5%',
    marginTop: '2%',
  },
  close_2: {width: 25, height: 25, resizeMode: 'contain'},
  NotInstalledField: {
    width: '90%',
    height: 35,
    borderRadius: 13,
    alignSelf: 'center',
    backgroundColor: COLOR.whites,
    ...commonStyles.horizontalView,
    paddingHorizontal: '4%',
    marginTop: '5%',
    marginBottom: '6%',
  },
  NotInstalledText: {
    fontSize: 12,
    fontWeight: '400',
    color: COLOR.gray_5,
    marginLeft: '4%',
  },
  btnContainer: {
    ...commonStyles.horizontalView,
    alignSelf: 'flex-end',
    paddingHorizontal: '5%',
    marginBottom:'5%',
    marginTop:"3%"
  },
  btnEmailCode: {
    paddingHorizontal: '4%',
    paddingVertical: '3%',
    borderRadius: 8,
  },
  EmailCodeText:{fontSize:12,fontWeight:"700"},
  TextInput:{
    width: '90%',
    height: 100,
    borderRadius: 10,
    backgroundColor: COLOR.whites,
    alignSelf: 'center',
    overflow: 'hidden',
    marginBottom: '5%',
    paddingHorizontal: '1%',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: COLOR.whites,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 16,
    color: COLOR.gray_5,
    marginBottom: 20,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: COLOR.perpal_3,
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: COLOR.whites,
    fontSize: 14,
    fontWeight: 'bold',
  },
});


export default styles;
