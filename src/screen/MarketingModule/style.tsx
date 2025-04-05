import { StyleSheet } from 'react-native';
import { COLOR, commonStyles, normalize } from '../../themes/StyleGuides';

const styles = StyleSheet.create({
 container: {
  ...commonStyles.mainContainer
 },
 selecorContainer: {
    ...commonStyles.verticleView,
    width: '90%',
    height: 45,
    backgroundColor: COLOR.gray_12,
    borderRadius: 10,
    overflow: 'hidden',
    alignSelf: 'center',
    marginTop:"5%"
    
  },
  textStyle: {
    fontSize: normalize(12),
    fontWeight: '500',
    color: COLOR.gray_5,
    textAlign: 'center',
  },
  ListContainer: {
    width: '90%',
    backgroundColor: COLOR.gray_7,
    alignSelf: 'center',
    borderRadius: 20,
    overflow: 'hidden',
    marginTop:'10%'
  },
  header: {
    height: 50,
    width: "24.6%",
    backgroundColor: COLOR.perpal_3,
    ...commonStyles.center,
  },
  bottomBar: {
    width: '100%',
    height: 50,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLOR.primary,
    position:"absolute",
    bottom:0
  },
});

export default styles;
