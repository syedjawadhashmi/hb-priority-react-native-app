import {StyleSheet} from 'react-native';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
    marginBottom:"15%"
  },
  AmmountContainer: {
    width: '90%',
    backgroundColor: COLOR.gray_7,
    alignSelf: 'center',
    borderRadius:14,
    overflow:"hidden",
    marginBottom:"5%",
    // paddingBottom:"10%"
    
  },
  titleContainer: {
    height: 40,
    backgroundColor: COLOR.perpal,
    justifyContent: 'center',
    borderRadius:14,
    marginBottom:"7%"
    
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: COLOR.whites,
    marginLeft: '3.6%',
  },
  slectedContainer: {
    ...commonStyles.verticleView,
    marginVertical: '4%',
    paddingHorizontal: '10%',
  },
  selctedBtn: {
    width: 65,
    height: 27,
    borderRadius: 15,
    backgroundColor: 'red',
    ...commonStyles.center,
  },
  selectText: {fontSize: 12, fontWeight: '800', color: COLOR.gray_5},
  CreditColor:{fontSize:10,fontWeight:"700",color:COLOR.gray_5},
  CreditDot:{width:10,height:10,borderRadius:5,backgroundColor:COLOR.perpal},
  CreditCOntainer:{...commonStyles.verticleView,alignSelf:"center",height:40,width:70}
});

export default styles;
