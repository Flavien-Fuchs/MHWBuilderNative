import { colors } from "../../../../utils/colors";
import { StyleSheet } from "react-native";

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
   itemNavBar: {
      backgroundColor: colors.rankPopup,
      width: "100%",
      padding: 10
   },
   itemContainer: {
      flexDirection: "row",
      justifyContent: "center"
   },
   armorImage: {
      width: 150,
      height: 150
   },
   icon: {
      height: 20,
      width: 20,
   },
   flatlist: {
      width: "95%"
   },
   item: {
      backgroundColor: colors.backgroundItem,
      marginVertical: 4,
      borderRadius: 10,
      padding: 10,
      alignItems: "center"
   },
   paragraphList: {
      color: colors.neutralWhiteColor,
      fontWeight: "800",
      textAlign: "center",
   },
   rarity: {
      color: colors.neutralYellowColor,
      textAlign: "center",
   },
   skillsList: {
      color: colors.colorDarkText,
      textAlign: "center",
      marginVertical: 8,
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
      padding: 8,
      borderRadius: 4,
      marginVertical: 10
   },
   filterDropdowns: {
      flexDirection: "row",
      justifyContent: "space-around"
   },
   picker: {
      backgroundColor: colors.neutralWhiteColor,
      color: colors.neutralBlackColor,
      borderRadius: 4,
      marginVertical: 10,
      width: "40%"
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
   ionicon: {
      fontSize: 28,
      color: colors.neutralWhiteColor,
      paddingBottom: 5,
      textAlign: "right"
   },
});
