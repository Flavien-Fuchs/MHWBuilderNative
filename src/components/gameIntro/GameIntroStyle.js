import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.bgBlackOpacityplus,
 },
  video: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  skipButton: {
    position: "absolute",
    top: 40,
    right: 20,
    padding: 10,
    backgroundColor: colors.bgBrownOpacity,
    borderRadius: 10,
  },
  textWhite: {
    color: colors.neutralWhiteColor,
  },
});
