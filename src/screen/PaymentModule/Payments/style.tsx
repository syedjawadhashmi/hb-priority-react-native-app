import { StyleSheet } from 'react-native';
import { COLOR, commonStyles, FONT } from '../../../themes/StyleGuides';

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
        marginBottom:'4%',
        marginTop:"5%"
      },
      selectBtn: { ...commonStyles.center, height: 40,width:"49%"},
      selectdText: {
        fontSize: 16,
        fontFamily: FONT.Geist_Medium,
        color: COLOR.black_2,
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
