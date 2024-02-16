import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors"


export const styles = StyleSheet.create({
    globalContainer: {
        flex: 6 / 10,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: colors.neutralWhiteColor
    },
    slot: {
        position: "relative",
        borderRadius: 1,
        width: 6,
        height: 6,
        color: colors.neutralWhiteColor,
        transitionDuration: 0.2,
    }
});
