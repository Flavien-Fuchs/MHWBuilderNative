import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 25,
    height: 25,
    tintColor: colors.neutralWhiteColor,
  },
  noSelectedText: { color: colors.neutralWhiteColor, fontWeight: "500" },
  containerSelectCharacter: {
    flex: 1,
    padding: 20,
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  selectCharacterImage: {
    flex: 1,
    resizeMode: "contain",
  },
  containerNameAndInfo: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },

  textName: { color: colors.neutralYellowColor, fontWeight: "800" },

  containerShowSelectCharacter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerCards: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 5,
    backgroundColor: colors.bgBrownOpacity,
  },
  containerBtnPlay: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  btnPlay: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: colors.bgBrownOpacity,
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
  textBtn: { color: colors.neutralWhiteColor },
});
