import { StyleSheet } from 'react-native';
import { COLOR, commonStyles } from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
 container: {
  
 },
 AmmountContainer: {
    width: '90%',
    backgroundColor: COLOR.gray_7,
    alignSelf: 'center',
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: '20%',

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
  btnContainer: {
    ...commonStyles.horizontalView,
    justifyContent: 'flex-end',
  },
  DropDownBtn: {
    ...commonStyles.verticleView,
    height: 25,
    backgroundColor: COLOR.perpal,
    borderRadius: 7,
    alignSelf: 'flex-end',
    paddingHorizontal: '3%',
    alignItems: 'center',
    marginTop: '5%',
    marginRight: '3.7%',
  },
  DropIcon: {width: 11, height: 11, resizeMode: 'contain', marginTop: '1.8%'},
  DropDowntext: {fontSize: 11, fontWeight: '700', color: COLOR.whites},
});

export default styles;
