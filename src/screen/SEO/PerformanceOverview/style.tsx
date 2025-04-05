import {StyleSheet} from 'react-native';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
    
  },
  btnStyle: {width: '90%', height: 40, alignSelf: 'center', marginTop: '6%'},
  keywordContainer: {
    width: '90%',
    height: 45,
    backgroundColor: COLOR.white1,
    ...commonStyles.verticleView,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: '4%',
    paddingHorizontal: 5,
  },
  keyBoardTitle: {fontSize: 10, fontWeight: '700', color: COLOR.gray_5},
  keywordNumBtn: {width: 70, height: 30, ...commonStyles.center},
  keywordNum: {fontSize: 14, fontWeight: '700', color: COLOR.whites},
  ArrowIcon: {width: 15, height: 15, resizeMode: 'contain'},
  ResultTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLOR.gray_5,
    marginLeft: '5%',
    marginTop: '7%',
  },
  StepsLine: {
    width: '90%',
    height: 20,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginTop: '9%',
  },
  dateList: {
    fontSize: 8,
    fontWeight: '400',
    color: COLOR.gray_5,
    width: 35,
    textAlign: 'center',
  },
  DateListContainer:{...commonStyles.verticleView,paddingHorizontal:"10%",marginBottom:"6%",marginTop:'2%'},
  RangCard: {
    width: '90%',
    height: 90,
    borderRadius: 10,
    backgroundColor: COLOR.mhroon,
    alignSelf:"center",
    ...commonStyles.center,
    marginTop:"3%"
  },
  RangText:{fontSize:30,fontWeight:"700",color:COLOR.whites,textAlign:"center"},
  map: {
    width: '90%',
    height: 220,
    alignSelf: 'center',
  },
  RangingShow:{width:30,height:30,borderRadius:15,...commonStyles.center,margin:"1.5%",},
  RangingShowText:{fontSize:15,fontWeight:"700",color:COLOR.whites},
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
