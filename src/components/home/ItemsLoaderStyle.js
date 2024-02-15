import { StyleSheet } from 'react-native'
import { colors } from "../../utils/colors"

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    }, name: {
        color: colors.sharpnessWhite
    }, load: {
        color: colors.sharpnessRed
    }, done: {
        color: colors.sharpnessGreen
    }
})