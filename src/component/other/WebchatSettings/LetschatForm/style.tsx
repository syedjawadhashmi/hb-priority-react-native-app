import {StyleSheet} from 'react-native';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  mainCOntainer: {
    width: '90%',
    // height: '95%',
    backgroundColor: COLOR.gray_7,
    alignSelf: 'center',
    marginTop: '5%',
    borderRadius: 10,
    ...commonStyles.center,
    flex: 1,
    paddingVertical: '10%',
  },
  card: {
    width: '70%',
    // height: '90%',
    backgroundColor: COLOR.whites,
    borderRadius: 10,
    overflow: 'hidden',
  },
  letsCat: {
    fontSize: 14,
    fontWeight: '900',
    color: COLOR.black,
    marginLeft: '5%',
    marginTop: '5%',
  },
  images: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    borderRadius: 14,
    marginLeft: '5%',
    marginTop: '2%',
  },
  LetChatContainer: {
    width: '100%',
    height: 90,
    backgroundColor:"#F8F8F8",
  },
  discription: {
    fontSize: 8,
    fontWeight: '400',
    color: COLOR.gray_5,
    marginLeft: '5%',
    marginTop: '2%',
  },
  TextInput: {
    borderBottomWidth: 1,
    borderBottomColor: COLOR.gray_13,
    width: '85%',
    height: 40,
    fontSize: 10,
    color: COLOR.gray_13,
    alignSelf: 'center',
  },
  btnContainer: {
    width: '85%',
    height: 35,
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: '7%',
    backgroundColor:COLOR.SkyBlue_1 
  },
  terms: {
    fontSize: 8,
    fontWeight: '400',
    color: COLOR.gray_5,
    width: '85%',
    alignSelf: 'center',
    marginBottom: '5%',
    marginTop: '3%',
  },
  chat: {width: 22, height: 22, resizeMode: 'contain', tintColor: COLOR.whites},
  ChatIcon: {
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: COLOR.black_2,
    ...commonStyles.center,
    alignSelf: 'flex-end',
    marginRight:'18%',
    marginTop:'5%'
  },
  modalContainer:{flex:1,...commonStyles.center,backgroundColor:COLOR.lightBlack},
  modal:{width:"90%",height:"70%",borderRadius:10,elevation:10,backgroundColor:COLOR.whites,},
  CountryCode:{fontSize:17,fontWeight:"700",color:COLOR.gray_5}
});

export default styles;
