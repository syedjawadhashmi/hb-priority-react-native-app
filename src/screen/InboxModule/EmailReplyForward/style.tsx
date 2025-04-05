import {StyleSheet} from 'react-native';
import  {COLOR, commonStyles, FONT, hp} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  title: {fontSize: 20, color: COLOR.gray_6, fontWeight: '900'},
  titleContainer: {
    width: '90%',
    borderBottomWidth: 2,
    borderBottomColor: COLOR.gray_7,
    height: hp("5%"),
    alignSelf: 'center',
    paddingHorizontal: '4%',
    marginTop: hp('4%'),
    marginBottom: hp('5%'),
  },
  selectContainer: {

    ...commonStyles.verticleView,
    alignSelf: 'center',
    position: 'absolute',
    bottom: '5%',
    paddingHorizontal:"3%"
  },
  selectBtn: {
    width: '31%',
    ...commonStyles.center,
    height: 30,
    backgroundColor: COLOR.gray_4,
    borderRadius:9,
    ...commonStyles.verticleView,
    paddingHorizontal:"4%"
  },
  selectdText: {
    fontSize: 12,
    color: COLOR.gray_3,
  },
  ReplyIcon:{width:10,height:10,resizeMode:"contain",tintColor:COLOR.gray_5}
});

export default styles;
