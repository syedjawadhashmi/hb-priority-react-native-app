import { StyleSheet } from 'react-native';
import { COLOR, commonStyles, TEXT_STYLE  } from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    marginHorizontal:10,
    width:'95%',
    marginTop:20
  },
  toggleRow: {
    ...commonStyles.verticleView,
    marginBottom: 8,
  },
 
  label: {
    ...TEXT_STYLE.text_medium,
    marginBottom:10,
    fontWeight:'900',
    color:COLOR.lightBlack
  },
 
  label1: {
    ...TEXT_STYLE.text_medium,
    // marginBottom:10,
    fontWeight:'900',
    color:COLOR.lightBlack
  },
  percentageInput: {
    backgroundColor: COLOR.white,
    ...commonStyles.verticleView,
    width:"60%",
    borderRadius:10,
    height:40,
    paddingHorizontal:"5%"
  },
  subText: {
    ...TEXT_STYLE.text_small,
    color:COLOR.lightBlack,
    marginBottom: 16,
    fontSize:12,
    textAlign:'right'
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    borderRadius:15,
    overflow:'hidden',
    position:'relative'
  },
  inputBox: {
    backgroundColor: COLOR.white,
    flex: 1,
    height: 40,
    paddingHorizontal: 8,
    color:COLOR.black

  },
  dropdown: {
    backgroundColor: COLOR.white_3,
    height: 40,
    paddingRight: 12,
    justifyContent: 'center',
    width:'40%'

  },
  dropdownText: {
    ...TEXT_STYLE.text_medium,
    color: COLOR.lightBlack,
    textAlign:'center'
  },
  counterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  counterControls: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:COLOR.white,
    borderRadius:15,
    overflow:'hidden'
  },
  counterText:{
    fontSize:18,
    fontWeight:'900',
    color:COLOR.lightBlack,
    paddingHorizontal:10 ,
  },
  decrementButton: {
    backgroundColor: COLOR.white_3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginRight: 8,
  },
  counterValue: {
    ...TEXT_STYLE.subTitle,
    color:COLOR.lightBlack
  },

});

export default styles;
