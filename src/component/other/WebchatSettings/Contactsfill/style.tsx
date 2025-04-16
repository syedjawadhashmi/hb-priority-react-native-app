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
    borderRadius: 15,
    elevation: 10,
    backgroundColor: COLOR.white1,
    paddingBottom: '8%',
    paddingTop:"3%"
  },
  closebtn: {alignSelf: 'flex-end', marginRight: '5%', marginTop: '2%'},
  closeIcon: {width: 10, height: 10, resizeMode: 'contain'},
  circle: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: COLOR.perpal_3,
    ...commonStyles.center,
  },
  numberText: {
    fontSize: 10,
    fontWeight: '400',
    color: COLOR.whites,
  },
  title: {fontSize: 16, fontWeight: '400', color: COLOR.gray_5},
  field: {
    width: '80%',
    height: 35,
    padding: 0,
    borderRadius: 10,
    backgroundColor: COLOR.whites,
    paddingHorizontal: '3%',
    marginTop: '2%',
  },
  emojy: {width: 10, height: 10, resizeMode: 'contain'},
  commnetContainer: {
    width: '80%',
    height: 100,
    backgroundColor: COLOR.whites,
    borderRadius: 10,
    marginTop: '5%',
    paddingHorizontal: '4%',
  },
  commentText: {
    width: '100%',
    height: 80,
    textAlignVertical: 'top',
    color: COLOR.gray_5,
  },
});

export default styles;
