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
        marginTop: "auto",
    },
    imageLoading: {
        width: 50,
        height: 50,
        margin: 20,
        marginBottom: "auto",
    },
    loginContainer: {
        padding: 10,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.backgroundLogin,
        color: colors.neutralWhiteColor,
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
    },
    footer: {
        marginTop: "auto",
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.rankPopup,
        padding: 10,
    },
    textCenter: {
        color: colors.neutralWhiteColor,
        textAlign: "center",
    },
});