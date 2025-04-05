import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, normalize} from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    marginTop: '6%',
    // marginBottom:'40%'
  },
  FileNameInputText: {
    width: '50%',
    height: 65,
    textAlignVertical: 'top',
    color:COLOR.black
  },
  AmmountContainer: {
    width: '90%',
    backgroundColor: COLOR.gray_7,
    alignSelf: 'center',
    borderRadius: 14,
    marginBottom: '5%',
  },
  titleContainer: {
    height: 40,
    marginBottom: '2%',
    backgroundColor: COLOR.perpal,
    justifyContent: 'center',
    borderRadius: 14,
  },

  title: {
    fontSize: normalize(16),
    fontWeight: '700',
    color: COLOR.whites,
    marginLeft: '3.6%',
  },
  FielsStyle: {marginBottom: '5%'},
  checkBtn: {
    ...commonStyles.horizontalView,
    marginLeft: '5.5%',
    marginTop: '3%',
  },
  checkText: {
    fontSize: normalize(11),
    fontWeight: '700',
    color: COLOR.gray_5,
    marginLeft: '4%',
  },
  check: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    tintColor: COLOR.primary,
  },
  CardBoard: {
    width: '90%',
    height: 100,
    backgroundColor: COLOR.whites,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: '10%',
  },
  BoardText: {fontSize: normalize(12), fontWeight: '800', color: COLOR.gray_5},
  BoardHeader: {
    borderBottomWidth: 1,
    borderBottomColor: COLOR.gray_7,
    ...commonStyles.verticleView,
    paddingHorizontal: '4%',
    height: 25,
  },
  BoardTextHeader: {
    ...commonStyles.verticleView,
    height: 25,
    marginTop:"6.5%"
  },
  TextinputBoard: {
    flex: 1,
    textAlignVertical: 'top',
    color: COLOR.black,
    
  },
  selectText: {
    fontSize: normalize(10),
    fontWeight: '400',
    color: COLOR.gray_5,
    width: '87%',
    alignSelf: 'center',
    marginTop: '2%',
    marginBottom:"4%"

  },
  discription: {
    fontSize: normalize(13),
    fontWeight: '800',
    color: COLOR.gray_5,
    marginLeft: '6%',
    marginTop: '3%',
  },
  CheckBox: {width: 17, height: 17, resizeMode: 'contain',},
  USAConatiner: {
    marginTop: '5%',
    ...commonStyles.horizontalView,
    marginLeft: '5%',
    
  },
  CheckText: {
    fontSize: normalize(13),
    fontWeight: '800',
    color: COLOR.gray_5,
    marginLeft: '2%',
  },
  GenerateKeyText: {fontSize: normalize(12), fontWeight: '800', color: COLOR.white},
  GenerateKeyBtn: {
    paddingHorizontal: '4%',
    paddingVertical: '3%',
    borderRadius: 13,
    backgroundColor:COLOR.perpal_2,
    marginLeft:"4%"
  },
});

export default styles;
