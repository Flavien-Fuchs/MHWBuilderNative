import { StyleSheet } from 'react-native'
import { colors } from "../../../utils/colors"

export const styles = StyleSheet.create({
   itemShit: {
      position: "relative",
      width: 28,
      borderRadius: 2,
   },

   slot: {
      position: "relative",
      borderRadius: 1,
      width: 6,
      height: 6,
      color: colors.whiteColor,
      transitionDuration: 0.2,  
   }
    });