import { StyleSheet } from 'react-native';
import { COLOR, commonStyles, normalize } from '../../themes/StyleGuides';

const styles = StyleSheet.create({
 container: {
  ...commonStyles.mainContainer
 },
 CompView:{...commonStyles.verticleView,paddingHorizontal:"3%",marginBottom:"3%"},
 bottomBar: {
    width: '100%',
    height: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLOR.primary,
    position:"absolute",
    bottom:0
  },
  BtnCOnatiner:{alignSelf:"center",width:"90%",marginTop:"5%",marginBottom:"20%"},
 cross: {width: 16, height: 16, resizeMode: 'contain'},
  crossBtn: {alignSelf: 'flex-end', marginRight: '5%', marginTop: '2%'},
  modelStyle: {
    width: '65%',
    backgroundColor: COLOR.whites,
    alignSelf: 'center',
    borderRadius: 10,
    paddingVertical: '5%',
  },
  titleContainer: {...commonStyles.horizontalView},
  title: {
    fontSize: normalize(18),
    fontWeight: '700',
    color: COLOR.gray_5,
    marginLeft: '5%',
  },
  icon: {width: 20, height: 20, resizeMode: 'contain', marginLeft: '5%'},
  selctor: {
    width: 25,
    height: 25,
    backgroundColor: COLOR.gray_7,
    ...commonStyles.center,
    borderRadius: 15,
  },
  selectorS: {
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: COLOR.perpal_3,
  },

});

export default styles;
