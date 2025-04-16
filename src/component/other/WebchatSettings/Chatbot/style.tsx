import { StyleSheet } from 'react-native';
import { COLOR, commonStyles } from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
 container: {
  
 },
 tittle: {
    fontSize: 14,
    fontWeight: '800',
    color: COLOR.perpal_3,
    marginLeft: '5%',
  },
  disciption: {
    fontSize: 10,
    fontWeight: '800',
    color: COLOR.gray_5,
    width: '90%',
    alignSelf: 'center',
    marginTop:'4%'
  },
  selector: {
    width: '90%',
    height: 35,
    borderRadius: 10,
    overflow: 'hidden',
    alignSelf: 'center',
    ...commonStyles.verticleView,
    marginTop:'7%'
  },

  selectorBtn: {
    width: '49.5%',
    height: 35,
    backgroundColor: COLOR.primary,
    ...commonStyles.center,
  },
  editTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: COLOR.perpal_3,
    marginLeft: '5%',
  },
});

export default styles;
