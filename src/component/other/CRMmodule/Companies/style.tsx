import {StyleSheet} from 'react-native';
import {COLOR, commonStyles} from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.mainContainer,
  },
  AmmountContainer: {
    width: '90%',
    backgroundColor: COLOR.gray_7,
    alignSelf: 'center',
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: '30%',
    marginTop: '3%',
  },
  titleContainer: {
    height: 40,
    marginBottom: '6%',
    backgroundColor: COLOR.perpal,
    justifyContent: 'center',
    borderRadius: 14,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: COLOR.whites,
    marginLeft: '3.6%',
  },
  containerText: {width: 90},
  Save: {
    ...commonStyles.verticleView,
    height: 25,
    backgroundColor: COLOR.primary,
    borderRadius: 7,
    alignSelf: 'flex-end',
    paddingHorizontal: '3%',
    alignItems: 'center',
    marginTop: '5%',
    marginBottom: '6%',
  },
  saveText: {fontSize: 11, fontWeight: '700', color: COLOR.black},
  sattingContainer: {
    ...commonStyles.verticleView,
    paddingHorizontal: '5%',
  },
  NewStageBtn: {
    height: 32,
    backgroundColor: COLOR.perpal,
    borderRadius: 7,
    ...commonStyles.center,
    paddingHorizontal: 10,
  },
  btnText: {fontSize: 10, fontWeight: '700', color: COLOR.whites},
  dropDown: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
    tintColor: COLOR.black,
    marginHorizontal: '1.5%',
  },
  TypeText: {fontSize: 10, fontWeight: '700', color: COLOR.perpal},
  filter: {width: 25, height: 25, resizeMode: 'contain', marginLeft: '10%'},
});

export default styles;
