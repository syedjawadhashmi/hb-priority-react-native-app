import {StyleSheet} from 'react-native';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.lightBlack,
    ...commonStyles.center,
  },
  modal: {
    width: '90%',
    backgroundColor: COLOR.white1,
    borderRadius: 15,
    paddingVertical:"5%"
  },
  titleContainer: {
    ...commonStyles.verticleView,
    paddingHorizontal: '5%',
    marginTop: '1%',
  },
  title: {fontSize: 20, fontWeight: '800', color: COLOR.gray_5},
  close: {fontSize: 15, fontWeight: '800', color: COLOR.gray_5},
  title_2: {
    fontSize: 12,
    fontWeight: '800',
    color: COLOR.gray_5,
    marginLeft: '6%',
    marginTop: '3%',
  },
  TitleField: {
    fontSize: 12,
    fontWeight: '800',
    color: COLOR.gray_5,
    marginTop: '2%',
  },
  cardStyle: {resizeMode: 'center', width: 20, height: 16},
  TextFild: {width: 140, backgroundColor: COLOR.whites},
  textDiscription: {
    fontSize: 12,
    fontWeight: '400',
    color: COLOR.gray_5,
    width: '90%',
    alignSelf: 'center',
  },
  checkContainer:{...commonStyles.horizontalView,marginLeft:"5%",marginBottom:'3%',marginTop:'3%'},
  btnContainer: {
    ...commonStyles.verticleView,
    alignSelf: 'flex-end',
    marginRight: '5%',
    marginTop: '7%',
  },
  btnStyle: {paddingHorizontal: '4%', paddingVertical: '1.5%', borderRadius: 8},
  btnText: {fontSize: 12, fontWeight: '800', color: COLOR.whites},
  checkStyle:{width:15,height:15,resizeMode:"contain"}
});

export default styles;
