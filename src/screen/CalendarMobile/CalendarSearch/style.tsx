import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, normalize} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  ListContainer: {
    paddingHorizontal: '4%',
    borderRadius: 15,
    backgroundColor: COLOR.perpal_3,
    ...commonStyles.center,
    ...commonStyles.verticleView,
    paddingVertical: '2%',
    alignSelf: 'flex-end',
    marginLeft: '2%',
    marginTop: '2%',
  },
  ListText: {fontSize: normalize(10), fontWeight: '800', color: COLOR.whites},
  ListIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    tintColor: COLOR.whites,
    marginRight: '2%',
  },
  TabalStatus: {
    ...commonStyles.verticleView,
    marginTop: '3%',
    width: '90%',
    alignSelf: 'center',
  },
  tabalStatusBox: {
    width: '22%',
    height: 30,
    backgroundColor: COLOR.perpal,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderLeftColor: COLOR.gray_7,
    borderRightColor: COLOR.gray_7,
    ...commonStyles.center,
  },
  TabalText: {
    fontSize: normalize(10),
    fontWeight: '400',
    color: COLOR.gray_5,
    textAlign: 'center',
  },
  TabalListContainer: {
    width: '22%',
    height: 40,
    backgroundColor: COLOR.perpal,
    borderWidth: 1,
    borderColor: COLOR.gray_7,
    ...commonStyles.center,
  },
  threeDot: {width: 16, height: 16, resizeMode: 'contain'},
  bottomBar: {
    width: '100%',
    height: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLOR.primary,
    position: 'absolute',
    bottom: 0,
  },

  DropContainer: {
    width: '40%',
    borderWidth: 1,
    borderColor: COLOR.perpal_3,
    position: 'absolute',
    right: '7%',
    borderRadius: 10,
    top: 30,
    backgroundColor: COLOR.whites,
    paddingVertical: '3%',
  },
  DropName: {
    fontSize: normalize(10),
    fontWeight: '400',
    color: COLOR.black,
    marginLeft: '3%',
  },
});

export default styles;
