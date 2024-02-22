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

import { styles } from "./GameResultStyle";

const GameResult = ({ pathImg, imDead, navigation }) => {
  const windowDimensions = useWindowDimensions();
  return (
    <ImageBackground
      source={require("../../assets/images/background.jpg")}
      resizeMode="cover"
      style={styles.containerFull}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.containerTextResult}>
          <Text
            style={{
              width: windowDimensions.height,
              height: windowDimensions.width,
              color: imDead ? colors.neutralWhiteColor : colors.neutralYellowColor,
              opacity: 0.5,
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
            ...styles.imgBack,
          }}
        />
        <View style={styles.containerBut}>
          <TouchableOpacity style={styles.btn} onPress={() => {}}>
            <Text style={styles.textWhite}>Continue</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Text style={styles.textWhite}>Quit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default GameResult;
