import { StyleSheet } from 'react-native';
import { COLOR, commonStyles } from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
    container: {...commonStyles.mainContainer},
    ListContainer: {
      width: '100%',
      height: 40,
      borderRadius: 14,
      backgroundColor: COLOR.perpal,
      alignSelf: 'center',
      marginBottom: '4%',
      justifyContent: 'center',
      paddingHorizontal: '5%',
    },
    listContainer: {marginTop: '8%'},
    pen: {
      width: 15,
      height: 15,
      resizeMode: 'contain',
      tintColor: COLOR.perpal_3,
    },
    MainTitle: {fontSize: 20, fontWeight: '800', color: COLOR.gray_5},
    editTitle: {
      fontSize: 14,
      fontWeight: '400',
      color: COLOR.perpal_3,
      marginLeft: '5%',
    },
    location: {
      fontSize: 16,
      fontWeight: '400',
      color: COLOR.perpal_3,
      marginLeft: '5%',
    },
    btnContainer: {...commonStyles.horizontalView, alignSelf: 'flex-end'},
    btnSave: {
      paddingHorizontal: '5%',
      paddingVertical: '2%',
      borderRadius: 10,
      marginRight: '5%',
      ...commonStyles.center,
    },
    SaveBtnText: {fontSize: 12, fontWeight: '700', color: COLOR.whites},
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
});

export default styles;
