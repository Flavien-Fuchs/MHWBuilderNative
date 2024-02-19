import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  image: {
    width: 25,
    height: 25,
    tintColor: colors.white,
  },
  body: {
    flex: 1,
    gap: 10,
  },
  part: {
    flex: 1,
  },
  profileImage: {
    height: "80%",
    width: "auto",
    resizeMode: "contain",
  },
  textWhite: {
    color: colors.white,
    textTransform: "uppercase",
  },
  myPart: {
    width: "100%",
    flexDirection: "row",
    padding: 10,
    gap: 10,
  },
  containerMyPartLeft: {
    flex: 1,
    gap: 10,
  },
  containerMonImage: {
    flex: 1,
  },
  monImage: {
    height: "100%",
    width: "auto",
    flex: 1,
    resizeMode: "contain",
    overflow: "visible",
  },
  containerBtnAction: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 10,
  },
});
