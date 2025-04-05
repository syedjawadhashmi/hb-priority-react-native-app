import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, wp} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  HeaderText: {fontSize: 16, fontWeight: '700', color: COLOR.whites},
  mcinContainer: {
    width: '90%',
    backgroundColor: COLOR.gray_7,
    alignSelf: 'center',
    marginTop: '5%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  Header: {
    width: '100%',
    height: 35,
    backgroundColor: COLOR.perpal_3,
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: '5%',
  },
  MpaStyle: {
    fontSize: 25,
    fontWeight: '800',
    color: COLOR.gray_5,
    alignSelf: 'center',
    marginTop: '6%',
  },
  containerText: {width: wp("40%"), backgroundColor: COLOR.whites},
  TextFild: {width: 90, backgroundColor: COLOR.whites},
  filedContainer: {backgroundColor: COLOR.whites, marginBottom: '1%'},
  titleStyle: {fontSize: 12, fontWeight: '800'},
  bottomBar: {
    width: '100%',
    height: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLOR.primary,
    position: 'absolute',
    bottom: 0,
  },
  saveBtn: {
    paddingHorizontal: '5%',
    paddingVertical: '2%',
    borderRadius: 10,
    backgroundColor: COLOR.primary,
    alignSelf: 'flex-end',
    marginRight: '5%',
    marginTop: '5%',
    marginBottom: '20%',
  },
  SaveBtn: {fontSize: 14, fontWeight: '700', color: COLOR.gray_5},
  docomentField: {
    width: '90%',
    height: 35,
    borderRadius: 10,
    backgroundColor: COLOR.whites,
    alignSelf: 'center',
    marginBottom: '1%',
    paddingHorizontal:'1%',
    ...commonStyles.horizontalView
  },
  docomentFieldTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: COLOR.gray_5,
    marginLeft: '6%',
    marginBottom: '1%',
  },
  docomentBtnText: {fontSize: 8, fontWeight: '800', color: COLOR.whites},
  NoFile:{fontSize:12,fontWeight:"400",color:COLOR.gray_5,marginLeft:"2%"}
});

export default styles;
