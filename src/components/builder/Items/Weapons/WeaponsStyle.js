import { StyleSheet } from 'react-native'
import { colors } from "../../../../utils/colors"

export const styles = StyleSheet.create({
    typeContainer: {
        justifyContent: "start",
        alignItems: "center",
        flexWrap:'wrap'
     },
     weaponType: {
        width: 160,
        height: 160,
        backgroundColor: colors.backgroundItem,
        padding: 16,
        alignItems: "center",
     },
     weaponTypeImage: {
        width: 100,
        height: 100,
     },
     weaponTypeText: {
        color: colors.neutralWhiteColor
     },

})