import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors"


export const styles = StyleSheet.create({
    globalContainer: {
        flex: 6 / 10,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "red",
        borderWidth: 1,
        borderStyle: "solid"
    },
    text: {
        color: colors.whiteColor
    }
});