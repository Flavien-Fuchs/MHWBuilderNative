import { StyleSheet } from "react-native";
import { colors } from '../../../utils/colors'

export const styles = StyleSheet.create({
    ItemSheetSingleContainer: {
        flex: 1,
        justifyContent: "center",
        width: "100%",
        borderColor: "#AAAAAAAA",
        borderWidth: 4,
        borderStyle: "solid",
        borderRadius: 20,
        width: "96%",
        marginTop: 10
    },
    resistance: {
        color: colors.neutralWhiteColor,
    },
    ionicon: {
        fontSize: 28,
        color: colors.neutralWhiteColor,
        padding: 10,
        textAlign: "right"
    },
    ISSView: {
        alignItems: "center",
    },
    text: {
        color: colors.neutralWhiteColor,
    },
    paragraphList: {
        color: colors.neutralWhiteColor,
        fontWeight: "800",
        textAlign: "center",
    },
    rarity: {
        color: colors.neutralYellowColor,
        textAlign: "center",
    },
    skillsList: {
        color: colors.colorDarkText,
        textAlign: "center",
        marginVertical: 8,
    },
    itemImage: {
        width: 180,
        height: 180
    },
    resistContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        width: 16,
        height: 16
    },
    ISSDescription: {
        alignItems: "center"
    },
    ISSStats: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginVertical: 10,
    },
    ISSSkillsList: {

        alignItems: "center",
    },
    textSkill: {
        alignItems: "center",
        color: colors.neutralWhiteColor,
    },
    ISSButtons: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 40
    },
    flatList: {
        flexGrow: 0
    },
    button: {
        backgroundColor: colors.colorButtonWeapon,
        padding: 10,
        borderRadius: 5,
        borderColor: colors.neutralWhiteColor,
        borderStyle: "solid",
        borderWidth: 1,
        color: colors.neutralWhiteColor,
    },
    sharpnessContainer: {
        flexDirection: "row",
        marginTop: 5,
    }
});


