import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors"


export const styles = StyleSheet.create({
    globalContainer: {
        flex: 3 / 10,
        alignItems: "center",
        justifyContent: "start",
    },
    button: {
        color: colors.neutralGreyColor,
        textTransform: "uppercase",
        fontWeight: "bold",
    },
    buttonActive: {
        color: colors.neutralWhiteColor,
        textTransform: "uppercase",
        fontWeight: "bold",
        textDecorationLine: "underline"
    },
    text: {
        color: colors.neutralWhiteColor,
    },
    buttonContainer: {
        flexDirection: "row",
        width: "80%",
        justifyContent: "space-evenly",
        marginBottom: 10
    },
    leftView: {
        flexDirection: "row",
        alignItems: "center"
    },
    leftViewImage: {
        width: 14,
        height: 14,
    },
    statsOn: {
        backgroundColor: colors.bgStat,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingVertical: 8,
        paddingHorizontal: 20,
    },
    statsOff: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingVertical: 8,
        paddingHorizontal: 20,
    },
    sharpnessContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    skillsCOntainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    skillOn: {
        marginLeft: 5,
        height: 14,
        width: 14,
        backgroundColor: colors.rankOn
    },
    skillOff: {
        marginLeft: 5,
        height: 14,
        width: 14,
        backgroundColor: colors.rankOff
    },

});