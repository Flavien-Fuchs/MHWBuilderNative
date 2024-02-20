import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Pressable,
} from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GameIntro from "../../components/gameIntro/GameIntro";
import GamePlay from "../../components/gamePlay/GamePlay";

import { monsters } from "../../assets/data/Monsters";
import { getImageOrVideoMonster } from "./../../utils/ImportMonster";

import { styles } from "./GameScreenStyle";

// import { armas } from "../assets/data/Armas";

const GameScreen = ({ route }) => {
  const [isReady, setIsReady] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const { myCharacter } = route.params;
  const [monster, setMonster] = useState(null);

  StatusBar.setBarStyle("light-content");

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  useEffect(() => {
    const value = monsters[Math.floor(Math.random() * monsters.length)];
    setMonster(value);
    setIsReady(true);
  }, []);

  const refreshComponent = () => {
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <View style={styles.container}>
      {isReady ? (
        !videoEnded ? (
          <GameIntro
            handleVideoEnd={handleVideoEnd}
            pathVideo={getImageOrVideoMonster("video", monster.id)}
          />
        ) : (
          <GamePlay myCharacter={myCharacter} adversaire={monster} />
        )
      ) : null}
    </View>
  );
};

export default GameScreen;

