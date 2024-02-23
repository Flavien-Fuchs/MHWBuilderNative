import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  containerFull: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
  },
  container: {
    flex: 1,
    position: "relative",
    padding: 10,
    justifyContent: "center",
  },
  imgBack: {
    resizeMode: "contain",
  },
  containerTextResult: {
    position: "absolute",
    right: 0,
    top: 0,
    left: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 0,
  },
  textBack: {
    transform: [{ rotate: "-90deg" }, { translateY: 30 }],
    margin: 0,
    fontSize: 170,
    textTransform: "uppercase",
    textAlign: "center",
    textAlignVertical: "bottom",
    padding: 0,
  },
  textWhite: {
    color: colors.neutralWhiteColor,
    textTransform: "uppercase",
    fontWeight: "800",
  },
  containerBut: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  btn: { paddingHorizontal: 20, paddingVertical: 5, borderRadius: 5 },
  btnOther: {
    backgroundColor: colors.neutralGreyColor,
  },
  btnQuit: {
    backgroundColor: colors.neutralRedColor,
  },
});
