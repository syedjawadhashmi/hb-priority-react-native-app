import {StyleSheet} from 'react-native';
import { COLOR, commonStyles } from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  IconConainer: {
    alignSelf: 'flex-end',
    ...commonStyles.horizontalView,
    marginRight: '5%',
    marginTop: '4%',
  },
  IconStyle: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginHorizontal: '2%',
  },
  inputTextContainer: {
    ...commonStyles.verticleView,
    borderBottomWidth: 1,
    borderBottomColor: COLOR.gray_4,
    width: '90%',
    alignSelf: 'center',
    marginTop: '3%',
  },
  titleinputText: {fontSize: 16, fontWeight: '600', color: COLOR.gray_5},
  textinput: {
    fontSize: 14,
    fontWeight: '500',
    color: COLOR.gray_5,
    top: 2.5,
    width: '83%',
  },
  smsText: {
    width: '90%',
    backgroundColor: COLOR.whites,
    alignSelf: 'center',
    borderRadius: 17,
    marginTop: '4%',
    color: COLOR.gray_5,
    padding:0,
    height:80,
    fontSize:12,
    textAlignVertical:"top",
    paddingHorizontal:"4%",
    paddingVertical:"2%"
  },
});

export default styles;
