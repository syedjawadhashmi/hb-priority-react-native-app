import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, normalize, wp} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
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
  Header: {
    width: '100%',
    height: 35,
    backgroundColor: COLOR.perpal_3,
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: '4%',
  },
  mainCintainer: {
    width: '90%',
    backgroundColor: COLOR.gray_7,
    alignSelf: 'center',
    marginTop: '5%',
    overflow: 'hidden',
    borderRadius: 10,
  },
  title: {fontSize: normalize(16), fontWeight: '800', color: COLOR.whites},
  discription: {
    fontSize: normalize(10),
    fontWeight: '800',
    color: COLOR.gray_5,
    width: '80%',
    marginLeft: '6%',
    marginTop: '5%',
  },
  Logo: {
    fontSize: normalize(12),
    fontWeight: '800',
    color: COLOR.gray_5,
    marginLeft: '5%',
    marginTop: '5%',
  },
  UploadStyle: {width: 20, height: 20, resizeMode: 'contain'},
  IconContainer: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: COLOR.gray_7,
    ...commonStyles.center,
    alignSelf: 'center',
  },
  uploadBtn: {
    width: '90%',
    height: 120,
    borderRadius: 10,
    backgroundColor: COLOR.whites,
    alignSelf: 'center',
    marginTop: '4%',
    ...commonStyles.center,
    marginBottom: '6%',
  },
  ClickText: {
    fontSize: normalize(12),
    fontWeight: '900',
    color: COLOR.gray_5,
    alignSelf: 'center',
    marginTop: '2%',
  },
  PNGText: {
    fontSize: normalize(12),
    fontWeight: '200',
    color: COLOR.gray_5,
    alignSelf: 'center',
  },
  Drop: {...commonStyles.verticleView, paddingHorizontal: '5%'},
  FieldContaoer: {
    ...commonStyles.verticleView,
    borderRadius: 10,
    backgroundColor: COLOR.whites,
    alignSelf: 'center',
    width: '90%',
    height: 35,
    paddingHorizontal: '2%',
    marginTop: '1%',
  },

  radioaCOntainer: {marginLeft: '5%', marginTop: '5%', marginBottom: '5%'},
  radioTitle: {
    fontSize: normalize(12),
    fontWeight: '400',
    color: COLOR.gray_5,
    marginLeft: '2%',
  },
  delete: {width: 15, height: 15, resizeMode: 'contain'},
  DropShort: {width: wp("36%")},
  textBtn: {fontSize: normalize(12), fontWeight: '800', color: COLOR.whites},
  btn: {
    paddingHorizontal: '3%',
    paddingVertical: '2%',
    backgroundColor: COLOR.perpal_3,
    borderRadius: 10,
    alignSelf: 'flex-end',
    marginRight:'10%',
    marginTop:'4%',
    marginBottom:"4%"
  },
  colorBox: {
    width: 20,
    height: 20,
    borderRadius: 6,
  },
  selectedBox: {
    borderWidth: 2,
    borderColor: 'black',
  },
});

export default styles;
