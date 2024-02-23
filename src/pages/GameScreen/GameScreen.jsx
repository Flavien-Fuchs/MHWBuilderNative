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
  const [numberGame, setNumberGame] = useState(0);

  StatusBar.setBarStyle("light-content");

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  useEffect(() => {
    const value = monsters[Math.floor(Math.random() * monsters.length)];
    setMonster(value);
    setIsReady(true);
    if (numberGame > 0) {
      setVideoEnded(false);
    }
  }, [numberGame]);

  const handlePressContinue = () => {
    setNumberGame((prevKey) => prevKey + 1);
  };

  // const handlePressContinue = () => {

  // };

  return (
    <View style={styles.container}>
      {isReady ? (
        !videoEnded ? (
          <GameIntro
            key={numberGame}
            handleVideoEnd={handleVideoEnd}
            pathVideo={getImageOrVideoMonster("video", monster.id)}
          />
        ) : (
          <GamePlay
            key={numberGame}
            myCharacter={myCharacter}
            adversaire={monster}
            handlePressContinue={handlePressContinue}
          />
        )
      ) : null}
    </View>
  );
};

export default GameScreen;
