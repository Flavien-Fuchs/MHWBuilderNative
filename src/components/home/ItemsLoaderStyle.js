import { StyleSheet } from 'react-native'
import { colors } from "../../utils/colors"

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    }, name: {
        color: colors.neutralWhiteColor
    }, load: {
        color: "red"
    }, done: {
        color: "green"
    }
})