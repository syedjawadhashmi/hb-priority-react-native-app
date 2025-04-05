import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, normalize} from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {marginBottom:"20%"},
  GenerateKeyBtn: {
    paddingHorizontal: '4%',
    paddingVertical: '3%',
    borderRadius: 18,
    backgroundColor: COLOR.perpal_2,
    marginRight: '2%',
    alignSelf: 'flex-end',
  },
  GenerateKeyText: {fontSize: normalize(12), fontWeight: '800', color: COLOR.white},
  paymentText: {
    fontSize: normalize(12),
    fontWeight: '800',
    color: COLOR.gray_5,
    marginLeft: '5%',
    marginBottom:"2%"
  },

  VisaCard: {
    width: '90%',
    // height: 70,
    borderRadius: 10,
    backgroundColor: COLOR.whites,
    alignSelf: 'center',
    marginBottom:"5%",
    paddingBottom:"2%"
  },
  iconstyle: {width: 12, height: 12, resizeMode: 'contain'},
  VisaIcon: {width: 30, height: 20, resizeMode: 'contain'},
  VisaStyle: {
    fontSize: normalize(12),
    fontWeight: '800',
    color: COLOR.gray_5,
    marginLeft: '5%',
  },
  Date: {
    fontSize: normalize(10),
    fontWeight: '400',
    color: COLOR.gray_5,
    marginLeft: '5%',
  },
  TitileContainer: {
    ...commonStyles.verticleView,
    paddingHorizontal: '5%',
    marginTop: '4%',
  },
  TitleText: {fontSize: normalize(18), fontWeight: '700', color: COLOR.gray_5,marginTop:'5%',marginLeft:'5%'},
  SelectorBtn: {
    ...commonStyles.verticleView,
    width: 100,
    height: 20,
    backgroundColor: COLOR.gray_7,
    borderWidth: 1,
    borderColor: COLOR.perpal_3,
    borderRadius: 20,
    overflow: 'hidden',
  },
  DropDate: {
    fontSize: normalize(9),
    fontWeight: '700',
    color: COLOR.gray_5,
    marginLeft: '2%',
  },
  TabalStatus: {...commonStyles.verticleView,marginBottom:"5%",marginTop:"5%"},
  tabalStatusBox: {
    width: '25%',
    height: 27,
    backgroundColor: COLOR.perpal,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderLeftColor: COLOR.gray_7,
    borderRightColor: COLOR.gray_7,
    ...commonStyles.center,
  },
  TabalText: {fontSize: normalize(11), fontWeight: '400', color: COLOR.whites},
  TabalListContainer: {
    width: '20%',
    height: 42,
    backgroundColor: COLOR.perpal,
    borderWidth: 1,
    borderColor: COLOR.gray_7,
    justifyContent: 'center',
  },
  bottomBar: {
    width: '100%',
    height: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLOR.primary,
    position: 'absolute',
    bottom: 0,
  },
  ListContainer: {
    ...commonStyles.center,
    backgroundColor: COLOR.perpal_2,
    height: 25,
    borderBottomWidth: 0.9,
    borderBottomColor: COLOR.whites,
  },
  ListContainerSecond: {height: 25, justifyContent: 'center'},
  TabalListText: {
    fontSize: normalize(11),
    fontWeight: '400',
    color: COLOR.gray_5,
    marginLeft: '4%',
  },
  iconStyle: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    marginVertical: 4,
  },
  openDropDown: {
    position: 'absolute',
    top: 35,
    backgroundColor: COLOR.whites,
    zIndex: 1,
    borderWidth: 1,
    borderColor: COLOR.gray,
    borderRadius: 4,
    marginTop: '2%',
    width: 40,
    height:70
  },
  buttonText: {
    fontSize: normalize(13),
    color: COLOR.whites,
  },
  optionText: {
    fontSize: normalize(13),
    color: COLOR.black,
    padding: '2%',
  },
});

export default styles;
