import { StyleSheet } from 'react-native';
import { COLOR } from '../../../../themes/StyleGuides';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
      },
      field: {
        height: 35,
        borderRadius: 12,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 1,
        overflow:"hidden",
        // width:"30%",
        paddingHorizontal:"2%"
      },
      color: {
        width: 45,
        height: 35,
        borderRadius: 10,
      },
      textTField: {
        fontSize: 11,
        fontWeight: '400',
        color: '#000',
        marginLeft: 10,
      },
      modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
      picker: {
        width: '70%',
      },
      selectBtn: {
        width: '90%',
        height: 40,
        borderRadius: 10,
        backgroundColor: COLOR.primary,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },
      selectText: {
        fontSize: 14,
        fontWeight: '600',
        color: COLOR.white,
      },
});

export default styles;
