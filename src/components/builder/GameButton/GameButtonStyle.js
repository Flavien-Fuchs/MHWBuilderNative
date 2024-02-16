import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors"


export const styles = StyleSheet.create({
    globalContainer: {
        flex: 1 / 10,
        alignItems: "center",
        justifyContent: "center",
    },
    playButton: {
        backgroundColor: colors.neutralWhiteColor,
        padding: 10,
        borderRadius: 10,
        width: 100,
        alignItems: "center",
        justifyContent: "center",

    },
    playText: {
        textTransform: "uppercase",
        fontWeight: "bold",
        margin: "auto"
    },
    text: {
        color: colors.neutralWhiteColor
    }
});