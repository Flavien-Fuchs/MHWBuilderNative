import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    login: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    imageLogo: {
        width: 250,
        height: 100,
        margin: 20,
    },
    imageLoading: {
        width: 50,
        height: 50,
        margin: 20,
    },
    loginContainer: {
        padding: 10,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.bgBrownOpacity,
        color: colors.whiteColor,
    },
    playButton: {
        backgroundColor: colors.whiteColor,
        padding: 10,
        borderRadius: 10,
    },
    playText: {
        textTransform: "uppercase",
        fontWeight: "bold",
    }
});