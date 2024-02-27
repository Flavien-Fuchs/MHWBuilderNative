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
    tintColor: colors.neutralWhiteColor,
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
    color: colors.neutralWhiteColor,
    textTransform: "uppercase",
  },
  timer: {
    fontSize: 18,
    fontWeight: 500,
  },
  alignCenter: { alignItems: "center" },
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
  containerAdImg: { flex: 1, position: "relative" },
  textAction: {
    textTransform: "uppercase",
    color: colors.neutralRedColor,
  },
  containerMyImg: {
    flex: 1,
    position: "relative",
  },

  containerDetail: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  damage: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.neutralRedColor,
  },
  myImg: {
    height: "100%",
    width: "auto",
    flex: 1,
    resizeMode: "contain",
    overflow: "visible",
  },
  containerBtnAction: {
    flex: 1,
    paddingLeft: 20,
    justifyContent: "center",
    gap: 20,
  },

  imageContainerAttack: {
    flexDirection: "row",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    aspectRatio: 1,
  },
  imageAttack: {
    width: 100, // Ajustez la largeur en fonction de vos besoins
    height: 100, // Ajustez la hauteur en fonction de vos besoins
    resizeMode: "contain",
    marginHorizontal: 5, // Espacement entre les images
  },
});
