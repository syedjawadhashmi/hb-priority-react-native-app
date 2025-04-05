import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, normalize} from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    marginBottom: '20%',
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
  DropContainer:{
    borderRadius:10,
    // alignItems:"center",
    paddingHorizontal:"2%"
  },

  title: {
    fontSize: normalize(16),
    fontWeight: '700',
    color: COLOR.whites,
    marginLeft: '3.6%',
  },
  discription: {
    fontSize: normalize(10),
    fontWeight: '400',
    color: COLOR.gray_5,
    width: '92%',
    alignSelf: 'center',
  },
  indecatorContainer: {
    ...commonStyles.horizontalView,
    backgroundColor: COLOR.whites,
    width: '92%',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: '4%',
    paddingVertical: '1%',
    marginBottom: '7%',
  },
  indecatorText: {
    fontSize: normalize(10),
    fontWeight: '400',
    color: COLOR.gray_5,
    width: '85%',
  },
  CardTable: {
    width: '90%',
    backgroundColor: COLOR.whites,
    borderRadius: 10,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  CardStatusBar: {
    backgroundColor: COLOR.perpal_3,
    height: 40,
    width: '100%',
    ...commonStyles.verticleView,
    paddingHorizontal: '4%',
  },
  checkBtn: {
    ...commonStyles.horizontalView,
  },
  checkText: {
    fontSize: normalize(11),
    fontWeight: '700',
    color: COLOR.gray_5,
    marginLeft: '4%',
  },
  check: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    tintColor: COLOR.primary,
  },
  StatusText: {fontSize: normalize(10), fontWeight: '700', color: COLOR.whites},
  CardListContainer: {
    backgroundColor: COLOR.whites,
    width: '100%',
    ...commonStyles.verticleView,
    paddingHorizontal: '4%',
    paddingVertical: '2%',
  },
  Listtext: {
    fontSize: normalize(9),
    fontWeight: '400',
    color: COLOR.gray_5,
   
  },
  Soursetext: {fontSize: normalize(8), fontWeight: '700', color: COLOR.gray_5},
  ActionText: {fontSize: normalize(8), fontWeight: '700', color: COLOR.gray_5},
  AddBtn: {
    paddingVertical: '2%',
    borderRadius: 6,
    width: 40,
    ...commonStyles.verticleView,
    paddingHorizontal: 5,
  },
  listImage: {width: 15, height: 15, resizeMode: 'contain',marginHorizontal:5},
  ListingBtn: {
    paddingHorizontal: '5%',
    backgroundColor: COLOR.primary,
    borderRadius: 6,
    paddingVertical: '2%',
    alignSelf: 'flex-end',
    marginRight: '5%',
    marginTop: '5%',
    marginBottom: '5%',
  },
  ListBtnText: {fontSize: normalize(12), fontWeight: '700', color: COLOR.perpal_3},
  commentTitle: {
    fontSize: normalize(12),
    color: COLOR.gray_5,
    marginLeft: '6%',
    marginBottom: '1.5%',
    marginTop: '1.5%',
    fontWeight: '700',
  },
  CommentTextInput: {
    width: '90%',
    padding: 10,
    backgroundColor: COLOR.whites,
    borderRadius: 10,
    textAlignVertical: 'top',
    alignSelf: 'center',
    height: 70,
    color: COLOR.black,
  },
  EmailAddress: {
    marginLeft: '5%',
    fontWeight: '400',
    fontSize: normalize(9),
    color: COLOR.gray_5,
    marginTop: '2%',
    marginBottom: '5%',
  },
});

export default styles;
