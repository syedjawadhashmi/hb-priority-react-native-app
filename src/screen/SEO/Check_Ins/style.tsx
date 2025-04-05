import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, normalize} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  TitileContainer: {
    ...commonStyles.verticleView,
    paddingHorizontal: '5%',
    marginTop: '4%',
  },
  TitleText: {fontSize: normalize(18), fontWeight: '700', color: COLOR.gray_5},
  firstbtn: {paddingHorizontal: '3%', paddingVertical: '1.5%', borderRadius: 7},
  btnText: {fontSize: normalize(11), fontWeight: '700'},
  CalendarIcon: {width: 12, height: 12, resizeMode: 'contain'},
  DropDate: {
    fontSize: normalize(9),
    fontWeight: '700',
    color: COLOR.gray_5,
    marginLeft: '2%',
  },
  getPicker: {
    paddingVertical: '1.5%',
    borderRadius: 15,
    ...commonStyles.verticleView,
    width: '60%',
    backgroundColor: COLOR.whites,
    paddingHorizontal: '2%',
  },
  DropIcon: {width: 13, height: 13, resizeMode: 'contain'},
  Lable: {fontSize: normalize(12), fontWeight: '400', color: COLOR.gray_5},
  ShowDrop: {
    ...commonStyles.verticleView,
    backgroundColor: COLOR.whites,
    width: 30,
    paddingHorizontal: 2,
    borderRadius: 8,
    height: 20,
    marginHorizontal: '2%',
  },
  ShowDropIcon: {width: 10, height: 10, resizeMode: 'contain'},
  TextInput: {width: 130, height: 30,color:COLOR.gray_5,fontSize:12},
  TabalStatus: {...commonStyles.verticleView,marginTop:"3%"},
  tabalStatusBox: {
    width: '20%',
    height: 27,
    backgroundColor: COLOR.perpal,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderLeftColor: COLOR.gray_7,
    borderRightColor:COLOR.gray_7,
    ...commonStyles.center
  },
  TabalText: {fontSize: normalize(11), fontWeight: '400', color: COLOR.gray_5},
  TabalListContainer: { width: '20%',
    height: 42,
    backgroundColor: COLOR.perpal,
    borderWidth: 1,
    borderColor:COLOR.gray_7,
    justifyContent:"center"
},
bottomBar: {
    width: '100%',
    height: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLOR.primary,
    position:"absolute",
    bottom:0
  },
  btnContainer: {
                ...commonStyles.verticleView,
                alignSelf: 'flex-end',
                marginRight: '5%',
                marginTop: '5%',
                marginBottom: '20%',
              }
});

export default styles;
