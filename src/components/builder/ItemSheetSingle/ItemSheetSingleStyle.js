import { StyleSheet } from "react-native";
import { colors } from '../../../utils/colors'

export const styles = StyleSheet.create({
    ItemSheetSingleContainer: {
        position: 'absolute',
        width: '50%',
        height: '50%',
        top: 0,
        
        left: 0,
        zIndex: 1000,
        backgroundColor: colors.rankPopup,
        color: colors.neutralWhiteColor,
        borderWidth: 1,
        borderColor: colors.neutralWhiteColor,
        borderRadius: 10,

    }
});


