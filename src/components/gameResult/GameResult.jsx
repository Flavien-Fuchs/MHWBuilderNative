import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../utils/colors";

const GameResult = ({ pathImg, imDead, navigation }) => {
  const windowDimensions = useWindowDimensions();
  return (
    <ImageBackground
      source={require("../../assets/images/background.jpg")}
      resizeMode="cover"
      style={[styles.containerFull]}
    >
      <SafeAreaView style={styles.container}>
        <View
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            left: 0,
            bottom: 0,
            alignItems: "center",
            justifyContent: "center",
            paddingRight: 0,
          }}
        >
          <Text
            style={{
              width: windowDimensions.height,
              height: windowDimensions.width,
              color: imDead ? colors.white : colors.yellow,
              opacity: imDead ? 0.5 : 1,
              ...styles.textBack,
            }}
          >
            {imDead ? "Lose" : "Victory"}
          </Text>
        </View>

        <Image
          source={pathImg}
          resizeMode="contain"
          style={{
            height: 0.8 * windowDimensions.height,
            width: "auto",
            // filter: imDead
            //   ? "grayscale(1) brightness(50%)"
            //   : "grayscale(0) brightness(100%)",
            ...styles.imgBack,
          }}
        />
        <View style={styles.containerBut}>
          <TouchableOpacity style={[styles.btn]} onPress={() => {}}>
            <Text style={styles.textWhite}>Continuer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn]}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={[styles.textWhite]}>Quitter</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default GameResult;

const styles = StyleSheet.create({
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
  textBack: {
    transform: [{ rotate: "-90deg" }, { translateY: 30 }],
    margin: 0,
    fontSize: 170,
    textTransform: "uppercase",
    textAlign: "center",
    textAlignVertical: "bottom",
    padding: 0,
  },
  textWhite: { color: colors.white, textTransform: "uppercase" },
  containerBut: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  btn: {},
});
