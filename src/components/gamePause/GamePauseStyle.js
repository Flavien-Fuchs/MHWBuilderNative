import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({  container: {
    flex: 1,
    backgroundColor: colors.bgBrownOpacity,
    justifyContent: "center",
    alignItems: "center",
  },
  containerModal: {
    padding: 20,
  },
  title: {
    textTransform: "uppercase",
    fontWeight: "800",
  },
  texteWhite: {
    color: colors.white,
  },
  containerBtn: {
    padding: 20,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },})