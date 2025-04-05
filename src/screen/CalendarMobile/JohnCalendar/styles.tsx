import { StyleSheet } from "react-native";
import { COLOR, commonStyles, TEXT_STYLE } from "../../../themes/StyleGuides";

const styles = StyleSheet.create({
    mainComtainer:{...commonStyles.mainContainer},
    container: {
        flex: 1,
        backgroundColor: COLOR.gray_7,
        margin: '5%',
        height:'90%'
    },
    header: {
        backgroundColor: COLOR.perpal,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10
    },
    headerText: {
        color: COLOR.whites,
    },
    calendarContainer: {
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden',
        borderBottomWidth: 1,
        borderBottomColor: COLOR.white,
        paddingBottom: 5

    },
    eventContainer: {
        flexDirection: 'row',
        flex:1,
        alignItems: 'center',
        padding: 10,
        marginHorizontal: 10,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: COLOR.white1,
    },
    eventDay: {
        fontSize: 18,
        fontFamily: TEXT_STYLE.subTitle.fontFamily,
        color: COLOR.black,
        marginRight: 15,
        textAlign:'center'
    },
    eventDetails: {
        flex: 1,
    },
    eventName: {
        fontSize: 16,
        fontFamily: TEXT_STYLE.text_medium.fontFamily,
        color: COLOR.black,
    },
    eventTime: {
        fontSize: 14,
        fontFamily: TEXT_STYLE.text_regular.fontFamily,
        color: COLOR.gray_3,
        marginVertical: 5,
    },
    statusContainer: {
        alignSelf: 'flex-start',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 10,
        backgroundColor: COLOR.perpal,
    },
    statusText: {
        fontSize: 12,
        fontFamily: TEXT_STYLE.text_medium.fontFamily,
        color: COLOR.whites,
    },
    avatarContainer: {
        width: 30,
        height: 30,
        borderRadius: 20,
        backgroundColor: COLOR.perpal,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarText: {
        fontSize: 16,
        fontFamily: TEXT_STYLE.text_medium.fontFamily,
        color: COLOR.whites,
    },
    fab: {
        position: 'absolute',
        bottom: "10%",
        right: "5%",
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: COLOR.primary,
   
        elevation: 3,
        shadowColor: COLOR.black,
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        ...commonStyles.center
    },
    fabText: {
        fontSize: 32,
        fontFamily: TEXT_STYLE.subTitle.fontFamily,
        color: COLOR.lightBlack,
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