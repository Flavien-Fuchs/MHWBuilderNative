import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors"


export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: colors.bgStatPopup
    },
    modalView: {
        margin: 20,
        backgroundColor: colors.rankPopup,
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: colors.neutralBlackColor,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    titleText: {
        color: colors.neutralWhiteColor,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 15,
        fontSize: 20
    },
    descriptionText: {
        color: colors.neutralWhiteColor,
        fontStyle: "italic",
        textAlign: 'center',
        marginBottom: 30,
    },
    listText: {
        color: colors.neutralWhiteColor,
        marginBottom: 15,
        textAlign: 'left',
    },
    listTextActive: {
        color: colors.rankOn,
        marginBottom: 15,
        textAlign: 'left',
    },
    flat: {
        flexGrow: 0,
    }
});