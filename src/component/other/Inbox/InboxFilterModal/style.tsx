import {StyleSheet} from 'react-native';
import { COLOR, commonStyles, hp } from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {
    width: '60%',
    backgroundColor: COLOR.white1,
    borderColor: COLOR.perpal,
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    alignSelf: 'flex-end',
    marginRight: '5%',
    marginTop: hp('15%'),
    paddingHorizontal: '2%',
    paddingTop: '3%',
  },  
  btnContainer: {...commonStyles.verticleView},
  filterBtn: {
    paddingVertical: '2%',
    backgroundColor: COLOR.perpal_2,
    borderRadius: 5,
    ...commonStyles.verticleView,
    paddingHorizontal: '2%',
    marginBottom: '10%',
  },
  FilterIcon: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
    tintColor: COLOR.perpal,
    marginRight: '4%',
  },
  text: {fontSize: 11, fontWeight: '400', color: COLOR.gray_5},
  messageContainer: {
    ...commonStyles.verticleView,
    marginHorizontal: '10%',
    marginVertical: '1%',
    marginBottom: '3%',
  },
  tickIcon: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
    tintColor: COLOR.perpal,
  },
  locationContainer: {
    ...commonStyles.horizontalView,
    marginVertical: '1%',
    marginBottom: '3%',
    marginLeft:"10%"
  },
  DropDownContainer:  {
    backgroundColor: COLOR.whites,
    borderRadius: 15,
    marginVertical: '3%',
    overflow:"hidden"
  },
  checkBx:{
    width: 15,
    height: 15,
    resizeMode: 'contain',
    tintColor: COLOR.perpal,

  },
  LocationBtn:{
    ...commonStyles.verticleView,
    alignSelf:"flex-end",
    marginVertical:"5%"
  }
});

export default styles;
