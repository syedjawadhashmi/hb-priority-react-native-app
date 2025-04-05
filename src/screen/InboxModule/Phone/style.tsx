import { StyleSheet } from 'react-native';
import { commonStyles,FONT,COLOR } from '../../../themes/StyleGuides';

const styles = StyleSheet.create({
    container: {
        ...commonStyles.mainContainer,
      },
    selectContainer: {
        width: '90%',
        height: 40,
        backgroundColor: COLOR.white1,
        borderRadius: 16,
        ...commonStyles.verticleView,
        alignSelf: 'center',
        overflow: 'hidden',
        marginBottom:'4%'
      },
      selectBtn: { ...commonStyles.center, height: 40,width:"49%"},
      selectdText: {
        fontSize: 16,
        fontFamily: FONT.Geist_Medium,
        color: COLOR.black_2,
      },
    
   
});

export default styles;
