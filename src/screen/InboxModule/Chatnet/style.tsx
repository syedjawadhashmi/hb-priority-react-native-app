import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  MessagesText: {
    fontSize: 14,
    fontFamily: FONT.Geist_SemiBold,
    color: COLOR.black_4,
  },
  FilterText:{fontSize:12,fontWeight:"700",color:COLOR.white},
  searchIcon:{
    width: 15,
    height: 15,
    resizeMode: 'center',
    tintColor: COLOR.gray,
  },
  AllContainer: {
    width: '90%',
    height: 40,
    borderRadius: 15,
    backgroundColor: COLOR.whites,
    ...commonStyles.center,
    alignSelf: 'center',
    marginBottom: '4%',
  },
  dialPadIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: COLOR.white,
  },
  DialPads: {
    backgroundColor: COLOR.perpal,
    width: 48,
    height: 48,
    borderRadius: 30,
    position: 'absolute',
    bottom: '5%',
    alignSelf: 'flex-end',
    right: '7%',
    ...commonStyles.center,
  },
  TextInputCIntainer:{...commonStyles.verticleView,paddingHorizontal:'5%',marginTop:"2%"},
  filterBtn: {
    paddingVertical: '1.2%',
    backgroundColor: COLOR.perpal_2,
    borderRadius: 5,
    ...commonStyles.verticleView,
    width:"23%",
    paddingHorizontal:"3%"
  },
  FilterIcon:{width:15,height:15,resizeMode:"center"},
  selectionModeFiels: {
    width: '90%',
    backgroundColor: COLOR.whites,
    borderRadius: 14,
    alignSelf: 'center',
    padding: 10,
    marginBottom:"3%"
  },
  closebtn: {alignSelf: 'flex-end', marginTop: '1  %'},
  closeICon: {width: 14, height: 14, resizeMode: 'contain'},
  fieldCrosView: {...commonStyles.verticleView,marginBottom:"2%"},
  titleField:{fontSize:14,fontWeight:"700",color:COLOR.gray_5,marginLeft:"4%"},
  drop:{width:10,height:10,resizeMode:"contain",tintColor:COLOR.black,left:5}
});

export default styles;
