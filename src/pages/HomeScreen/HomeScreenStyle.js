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
        backgroundColor: colors.backgroundLogin,
        color: colors.neutralWhiteColor,
    },
    playButton: {
        backgroundColor: colors.neutralWhiteColor,
        backgroundColor: colors.neutralWhiteColor,
        padding: 10,
        borderRadius: 10,
    },
    playText: {
        textTransform: "uppercase",
        fontWeight: "bold",
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.rankPopup,
        color: colors.neutralWhiteColor,
      },
    center: {
        textAlign: "center"
      },
});