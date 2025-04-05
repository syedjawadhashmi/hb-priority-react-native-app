import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, normalize} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {},
  titleSTyele: {
    fontSize: normalize(12),
    fontWeight: '800',
    marginLeft: '5%',
    color: COLOR.gray_5,
  },
  textStyle: {
    fontSize: normalize(12),
    fontWeight: '400',
    color: COLOR.gray_5,
    marginLeft: '5%',
  },
  dateSelector: {
    paddingHorizontal: '.5%',
    backgroundColor: COLOR.white1,
    borderRadius: 10,
    ...commonStyles.horizontalView,
    paddingVertical:'1%',
    ...commonStyles.center

    
  },
  iconStyle:{width:12,height:12,resizeMode:"contain"},
  TabalStatus: {...commonStyles.verticleView,marginBottom:"25%",marginTop:"5%"},
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
});

export default styles;
