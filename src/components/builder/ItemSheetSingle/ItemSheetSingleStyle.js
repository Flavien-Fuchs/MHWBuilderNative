import { StyleSheet } from "react-native";
import { colors } from '../../../utils/colors'

export const styles = StyleSheet.create({
    ItemSheetSingleContainer: {
        flex: 1,
        width: "100%",
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
        fontSize: 24,
        textAlign: "center",
    },
    rarity: {
        color: colors.neutralYellowColor,
        textAlign: "center",
        fontSize: 18,
        fontWeight: "500",
    },
    skillsList: {
        color: colors.colorDarkText,
        textAlign: "center",
        marginVertical: 8,
        fontSize: 18,
    },
    itemImage: {
        width: 160,
        height: 160,
    },
    resistance: {
        /* minWidth: 160, */
    },
    resistContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        width: 16,
        height: 16
    },
    ISSDescription: {
        alignItems: "center",
        width: "100%"
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


