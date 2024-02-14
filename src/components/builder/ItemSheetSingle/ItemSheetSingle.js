import { StyleSheet } from "react-native";
import { colors } from './../../../utils/colors'

export const styles = StyleSheet.create({
    ItemSheetSingleContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 1000,
        backgroundColor: color.rankPopup,
        color: colors.neutralWhiteColor,
        borderWidth: 1,
        borderColor: colors.neutralWhiteColor,
        borderRadius: 10,

    }
});


