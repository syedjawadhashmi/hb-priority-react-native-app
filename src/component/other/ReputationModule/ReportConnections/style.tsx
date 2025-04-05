import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, normalize} from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
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
  IconStyle: {width: 40, height: 40, resizeMode: 'contain',marginRight:'5%'},
  Chardcontainer: {
    width: '90%',
    borderRadius: 15,
    backgroundColor: COLOR.whites,
    alignSelf: 'center',
    marginTop: '5%',
    flexDirection: 'row',
    padding:"5%"
  },
  btnText: {fontSize: normalize(12),fontWeight:"500",color:COLOR.black},
  btnContainer: {
    ...commonStyles.verticleView,
    height: 25,
    width: '26%',
    backgroundColor: COLOR.primary,
    borderRadius: 6,
    paddingHorizontal: '2%',
    marginTop:'3%'
  },
  plusIcon: {width: 14, height: 14, resizeMode: 'contain',tintColor:COLOR.black},
  CardTitle: {fontSize: normalize(16), fontWeight: '700', color: COLOR.gray_5},
  discription: {
    fontSize: normalize(11),
    fontWeight: '400',
    color: COLOR.gray_5,
    width: '60%',
  },
});

export default styles;
