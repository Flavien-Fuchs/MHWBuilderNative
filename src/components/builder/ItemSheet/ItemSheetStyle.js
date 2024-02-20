import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors"


export const styles = StyleSheet.create({
    globalContainer: {
        position: "relative", 
        flex: 6 / 10,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },
    text: {
        color: colors.neutralWhiteColor
    },
    slot: {
        position: "relative",
        justifyContent: "center",
        borderRadius: 16,
        width: 100,
        height: 100,
        color: colors.neutralWhiteColor,
        backgroundColor: colors.backgroundSlot,
        transitionDuration: 0.2,
    },
    part: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 10
    },
    part1: {
        paddingLeft: 10,
        alignItems: 'flex-end',
    },
    armorImage: {
        height: 100,
        width: 100
    },
    ImageBackground: {
        height: 70,
        width: 70,
        alignSelf: 'center',
    }

});
