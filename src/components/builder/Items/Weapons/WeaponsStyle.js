import { StyleSheet } from 'react-native'
import { colors } from "../../../../utils/colors"


export const styles = StyleSheet.create({
   globalItemContainer: {
      flex: 1,
      justifyContent: 'start',
      alignItems: 'center',
   },
   safeArea: {
      flex: 1,
      backgroundColor: colors.bgBlackOpacity,
   },
   globalItemContainerType: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.neutralWhiteColor,
   },
   typeContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "start",
      gap: 5,
      flexWrap: 'wrap',
   },
   weaponType: {
      width: 80,
      height: 100,
      backgroundColor: colors.backgroundItem,
      padding: 8,
      alignItems: "center",
      justifyContent: 'space-evenly',
      borderRadius: 10,
   },
   weaponTypeImage: {
      width: 40,
      height: 40,
   },
   weaponTypeText: {
      color: colors.neutralWhiteColor,
      textAlign: "center",
   },
   weaponImage: {
      width: 120,
      height: 120,
   },
   flatList: {
      width: "100%"
   },
   item: {
      backgroundColor: colors.bgStatPopup,
      marginTop: 10,
      marginHorizontal: 10,
      borderRadius: 10,
      padding: 10,
      alignItems: "center",
   },
   paragraphList: {
      color: colors.neutralWhiteColor,
      fontWeight: "800",
      textAlign: "center",
      fontSize: 18,
   },
   rarity: {
      color: colors.neutralYellowColor,
      textAlign: "center",
   },
   detailsInfos: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center"
   },
   text: {
      color: colors.neutralWhiteColor,
   },
   sharpnessContainer: {
      flexDirection: "row",
      alignItems: "center",
   },
   itemNavBar: {
      backgroundColor: colors.rankPopup,
      width: "100%",
      padding: 10
   },
   input: {
      backgroundColor: colors.neutralWhiteColor,
      color: colors.neutralBlackColor,
      padding: 10,
      borderRadius: 4,
      marginVertical: 10
   },
   filterDropdowns: {
      flexDirection: "row",
      justifyContent: "space-between"
   },
   picker: {
      backgroundColor: colors.neutralWhiteColor,
      color: colors.neutralBlackColor,
      borderRadius: 4,
      marginVertical: 10,
      width: "47%"
   },
   buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-between"
   },
   button: {
      backgroundColor: colors.colorButtonWeapon,
      padding: 10,
      borderRadius: 5,
      borderColor: colors.neutralWhiteColor,
      borderStyle: "solid",
      borderWidth: 1,
      color: colors.neutralWhiteColor,
   },
   closeButton: {
      marginBottom: 50
   },
   ionicon: {
      fontSize: 28,
      color: colors.neutralWhiteColor,
      paddingBottom: 5,
   },
   typeText: {
      color: colors.neutralWhiteColor,
      textTransform: "capitalize",
      fontSize: 20,
   }
})

