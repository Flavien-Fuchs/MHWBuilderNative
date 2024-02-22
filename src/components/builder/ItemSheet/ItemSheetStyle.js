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
    slot1: {
        width: 50,
        height: 50,
        
    },
    part: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 10
    },
    part1: {
        paddingLeft: 10,
        marginLeft: 50,
        alignItems: 'flex-end',
    },
    armorImage: {
        height: 100,
        width: 100
    },
    imageBackground: {
        height: 70,
        width: 70,
        alignSelf: 'center',
    },
    imageBackgroundCharm: {
        height: 40,
        width: 40,
        alignSelf: 'center',
        tintColor: colors.neutralWhiteColor
    },
    charmImage: {
        height: 45,
        width: 45,
        marginLeft: 5
    }


});
