import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../themes/StyleGuides';

export const styles = StyleSheet.create({
  container: {
    // ...commonStyles.mainContainer,
  },

  titleContainer: {
    ...commonStyles.horizontalView,
    // marginVertical: '5%',
    // backgroundColor:COLOR.perpal,
    paddingVertical:"3%"
  },
  titleStyle: {
    fontSize: 14,
    fontFamily: FONT.Geist_Bold,
    color: COLOR.gray_5,
    marginLeft:"6%"
  },
  weeklyStyle: {
    fontSize: 11,
    fontFamily: FONT.Geist_Medium,
    color: COLOR.darkGray,
    marginLeft: '2%',
  },
  listContainer: {
    marginLeft: '17%',
    marginVertical: '4%',
...commonStyles.horizontalView,
  },
  nameStyle: {
    fontSize: 11,
    color: COLOR.gary2,
    fontWeight: '700',
    fontFamily: FONT.Geist_Regular,
    left:5
  },
  textinput: {
    width: '90%',
    height: 35,
    backgroundColor: COLOR.white,
    borderRadius: 12,
    paddingHorizontal: '5%',
    fontSize: 13,
    fontFamily: FONT.Geist_SemiBold,
    alignSelf: 'center',
    marginTop: '20%',
    color: COLOR.gray,
    marginBottom: '5%',
  },
  line: {
    backgroundColor: COLOR.primary,
    height: 4,
    width: '75%',
    marginLeft: '10%',
    marginTop: '10%',
    marginBottom: '14%',
  },
  FilterContainer: {
    ...commonStyles.verticleView,
    paddingHorizontal: '7%',
    marginTop: '10%',
    marginVertical:"5%"
  },
  FiltersIcon: {width: 15, height: 15, resizeMode: 'contain',tintColor:COLOR.gray_5},
  Filters: {
    fontSize: 13,
    fontWeight: '700',
    color: COLOR.gray_5,
    marginLeft: '14%',
  },
  CloseIcon: {width: 16, height: 1, resizeMode: 'contain'},
  checkBox: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: COLOR.gray_5,
  },
  ItemICon:{width:15,height:15,resizeMode:"contain",marginLeft:'6%'},
  companyName:{fontSize:12,fontWeight:"400",color:COLOR.gray_5},
  Name:{fontSize:15,fontWeight:"800",color:COLOR.gray_5,marginRight:"7%"},
  profileStyle:{width:50,height:50,resizeMode:"contain",borderRadius:30}

});
