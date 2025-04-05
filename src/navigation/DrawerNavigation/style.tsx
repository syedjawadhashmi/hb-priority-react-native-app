import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT} from '../../themes/StyleGuides';

export const styles = StyleSheet.create({
  container: {
    // ...commonStyles.mainContainer,
  },

  titleContainer: {
    ...commonStyles.horizontalView,
    marginLeft: '10%',
    marginVertical: '5%',
  },
  titleStyle: {
    fontSize: 17,
    color: COLOR.perpal_3,
    fontWeight:"700"
  },
  weeklyStyle: {
    fontSize: 11,
    fontFamily: FONT.Geist_Medium,
    color: COLOR.darkGray,
    marginLeft: '2%',
  },
  listContainer: {
    marginVertical: '1%',
    ...commonStyles.verticleView,
    paddingHorizontal:"12%"
  },
  nameStyle: {
    fontSize: 15,
    color: COLOR.gary2,
    fontWeight: '400',
    fontFamily: FONT.Geist_Regular,
  },
  textinput: {
    width: '85%',
    backgroundColor: COLOR.whites,
    borderRadius: 12,
    paddingHorizontal: '5%',
    fontSize: 13,
    fontFamily: FONT.Geist_SemiBold,
    marginTop: '6%',
    color: COLOR.gray,
    marginBottom: '5%',
    alignSelf:"center",
    padding:0,

  
  },
  line: {
    backgroundColor: COLOR.perpal_3,
    height: 6,
    width: '80%',
    marginLeft: '10%',
    marginTop: '10%',
    marginBottom: '14%',
    borderRadius:15
  },
  close: {width: 16, height: 16, resizeMode: 'cover', tintColor: COLOR.black1},
  closeBtn: {
    alignSelf: 'flex-end',
    marginRight: '10%',
    marginTop: '10%',
    marginBottom: '4%',
  },
  name: {fontSize: 16, fontWeight: '700', color: COLOR.gray_5},
  CompanyName: {fontSize: 12, fontWeight: '500', color: COLOR.gray_5},
  NamesContainer: {
    alignSelf: 'flex-end',
    marginRight: '16%',
    marginTop: '5%',
    marginBottom: '4%',
  },IconStyle:{width:18,height:18,resizeMode:"contain",marginRight:"6%"},
  LastButton:{...commonStyles.horizontalView,marginLeft:"13%",marginVertical:"1%"}
});
