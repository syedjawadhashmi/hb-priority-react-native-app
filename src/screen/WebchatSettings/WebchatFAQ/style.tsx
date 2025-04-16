import {StyleSheet} from 'react-native';
import {COLOR, commonStyles} from '../../../themes/StyleGuides';

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

  titleContaoner: {
    flexDirection: 'row',
    paddingHorizontal: '5%',
    marginTop: '5%',
    justifyContent: 'space-between',
    marginBottom: '5%',
  },
  Title: {fontSize: 20, fontWeight: '900', color: COLOR.gray_5},
  ButnDrawer: {
    width: 80,
    borderWidth: 1,
    color: COLOR.perpal_3,
    paddingHorizontal: '2%',
    paddingVertical: '2%',
    borderRadius: 7,
  },
  DropDownIcon: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
    tintColor: COLOR.black,
  },
  dropDownText: {fontSize: 10, fontWeight: '800', color: COLOR.perpal_3},
  QText: {
    fontSize: 13,
    fontWeight: '800',
    color: COLOR.perpal_3,
    marginLeft: '5%',
  },
  userIcon: {width: 15, height: 15, resizeMode: 'contain'},
  loctionText: {
    fontSize: 10,
    fontWeight: '400',
    color: COLOR.gray_5,
    marginLeft: '3%',
  },
  locationContainer: {
    ...commonStyles.horizontalView,
    marginLeft: '13%',
    marginTop: '2%',
  },
  AnsContainer: {
    width: '90%',
    // height: 60,
    backgroundColor: COLOR.whites,
    alignSelf: 'center',
    marginTop: '4%',
    borderRadius: 10,
  },
  BtnContaioner: {
    paddingHorizontal: '4%',
    paddingVertical: '2%',
    backgroundColor: COLOR.perpal_3,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: '4%',
    marginBottom: '5%',
    ...commonStyles.verticleView,
    marginRight: '5%',
  },
  BtnText: {fontSize: 12, fontWeight: '900', color: COLOR.whites},
});

export default styles; 
