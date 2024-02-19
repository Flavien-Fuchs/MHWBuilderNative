import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgBlackOpacity,
  },
  containerModal: {
    flex: 1,
    justifyContent: "space-between",
  },
  containerBody: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  containerImg: { width: "100%", aspectRatio: 1 },
  imageCharacSelect: { width: "auto", height: "100%", resizeMode: "contain" },
  containerDescrip: {
    backgroundColor: colors.bgBrownOpacity,
    alignItems: "center",
    padding: 20,
    gap: 20,
  },
  textName: { color: colors.white, fontWeight: "800" },
  textDecrip: { color: colors.white, textAlign: "center" },
  footer: {
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 20,
  },
  image: {
    width: 25,
    height: 25,
    tintColor: colors.white,
  },
  textWhite: {
    color: colors.white,
  },
});
