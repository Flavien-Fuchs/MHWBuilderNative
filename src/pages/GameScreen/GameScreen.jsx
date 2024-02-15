import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GameIntro from "../../components/gameIntro/GameIntro";
import GamePlay from "../../components/gamePlay/GamePlay";

const GameScreen = () => {
  const [videoEnded, setVideoEnded] = useState(false);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {!videoEnded ? (
        <GameIntro handleVideoEnd={handleVideoEnd} />
      ) : (
        <GamePlay />
      )}
    </SafeAreaView>
  );
};

export default GameScreen;

const styles = StyleSheet.create({});
