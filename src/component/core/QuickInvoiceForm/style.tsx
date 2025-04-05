import { StyleSheet } from 'react-native';
import { COLOR, commonStyles } from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
 container: {
  
 },
 AmmountContainer: {
    width: '90%',
    backgroundColor: COLOR.gray_7,
    alignSelf: 'center',
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: '5%',
  },
  titleContainer: {
    height: 40,
    marginBottom: '6%',
    backgroundColor: COLOR.perpal,
    justifyContent: 'center',
    borderRadius: 14,
  },
  DropDownBtn: {
    ...commonStyles.verticleView,
    height: 25,
    backgroundColor: COLOR.perpal,
    borderRadius: 7,
    alignSelf: 'flex-end',
    paddingHorizontal: '3%',
    alignItems: 'center',
    marginTop: '5%',
    marginRight: '3.7%',
  },
  DropDowntext: {fontSize: 11, fontWeight: '700', color: COLOR.whites},

  title: {
    fontSize: 16,
    fontWeight: '700',
    color: COLOR.whites,
    marginLeft: '3.6%',
  },
  Expire: {marginBottom: '7%'},
  containerText:{width:90},
  checkBtn: {
    ...commonStyles.horizontalView,
    marginLeft: '5.5%',
    marginTop: '3%',
  },
  checkText: {
    fontSize: 11,
    fontWeight: '700',
    color: COLOR.gray_5,
    marginLeft: '4%',
  },
  check: {width: 15, height: 15, resizeMode: 'contain'},

});

export default styles;
