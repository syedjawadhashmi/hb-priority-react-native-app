import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../themes/StyleGuides';

export const styles = StyleSheet.create({
  container: {
    // ...commonStyles.mainContainer,
  },

  titleContainer: {
    ...commonStyles.horizontalView,
    marginVertical: '5%',
    paddingVertical:"3%",
    marginLeft:'6%'
  },
  titleStyle: {
    fontSize: 12,
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
    marginVertical: '2%',
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
  },
  FiltersIcon: {width: 18, height: 18, resizeMode: 'contain'},
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
  titleIcons:{width:20,height:20,resizeMode:"contain"},
  btnTitle:{fontSize:9,fontWeight:"700",color:COLOR.whites},
  button:{borderRadius:15,paddingHorizontal:"5%",paddingVertical:"3%"}
});
