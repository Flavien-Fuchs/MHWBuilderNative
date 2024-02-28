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
    shadowOpacity: 0.24,
    shadowRadius: 1,
    elevation: 4, 
    backgroundColor: colors.bgBrownOpacityplus,
    borderRadius: 10,
  },
  title: {
    textTransform: "uppercase",
    fontWeight: "800",
  },
  pause:{
    color: colors.pause,
    textAlign: "center",
    fontSize: 17,
  },
  texteWhite: {
    color: colors.neutralWhiteColor,
  },
  containerBtn: {
    padding: 20,
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },})