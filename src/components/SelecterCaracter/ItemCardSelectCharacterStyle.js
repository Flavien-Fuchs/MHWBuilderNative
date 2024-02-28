import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    width: "15%",
    paddingVertical: 5,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "auto",
    aspectRatio: 3 / 4,
    borderRadius: 10,
    resizeMode: "contain",
  },
  shadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  btnCheck: {
    position: "absolute",
    top: -10,
    left: -10,
    tintColor: colors.neutralGreenColor,
  },
  competenceImage: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 25,
    height: "auto",
    aspectRatio: 1,
    resizeMode: "contain",
  },
});
