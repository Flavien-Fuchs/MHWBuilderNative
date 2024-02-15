import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const GamePlay = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/background.jpg")}
      resizeMode="cover"
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <Text>GamePlay</Text>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default GamePlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
