import {StyleSheet} from 'react-native';
import {COLOR, commonStyles, FONT, width} from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  mainHeader: {
    backgroundColor: COLOR.whites,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  tick: {width: 15, height: 15, resizeMode: 'contain'},
  Paid: {fontSize: 16, fontWeight: '900', color: COLOR.primary},
  date: {fontSize: 14, fontWeight: '400', color: COLOR.gray_5},
  containerHeader: {
    ...commonStyles.verticleView,
    paddingHorizontal: '7%',
    marginVertical: '2%',
  },
  secondContainer: {width: '90%', ...commonStyles.verticleView},
  DropDownBtn: {
    ...commonStyles.verticleView,
    height: 30,
    backgroundColor: COLOR.perpal,
    borderRadius: 7,
    alignSelf: 'flex-end',
    paddingHorizontal: '3%',
    alignItems: 'center',
    marginTop: '5%',
    marginRight: '6%',
  },
  DropIcon: {
    width: 11,
    height: 11,
    resizeMode: 'contain',
    marginTop: '1%',
    marginLeft: '2%',
  },
  DropDowntext: {fontSize: 11, fontWeight: '700', color: COLOR.whites},
  SummaryText: {
    fontSize: 16,
    fontWeight: '700',
    color: COLOR.perpal_3,
    marginLeft: '5%',
    marginTop: '3%',
  },
  CardContainer: {
    width: '90%',
    backgroundColor: COLOR.whites,
    paddingVertical: '3%',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: '2%',
  },
  CardTextView: {
    ...commonStyles.verticleView,
    paddingHorizontal: '5%',
    height: 30,
  },
  title: {fontSize: 12, fontWeight: '700', color: COLOR.gray_5},
  price: {fontSize: 12, fontWeight: '400', color: COLOR.gray_5},
  actionDrop: {
    position: 'absolute',
    backgroundColor: COLOR.whites,
    zIndex: 1,
    borderWidth: 1.3,
    borderColor: COLOR.perpal,
    borderRadius: 14,
    alignSelf: 'flex-end',
    top: width * 0.14,
    padding: 5,
    right: '6%',
  },
  dropText: {
    fontSize: 10,
    fontWeight: '400',
    color: COLOR.perpal,
    paddingTop: '1%',
    alignSelf:"flex-end"
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
});

export default styles;
