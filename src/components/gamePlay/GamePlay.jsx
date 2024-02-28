import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import GamePause from "../gamePause/GamePause";
import { useNavigation } from "@react-navigation/native";
import GameResult from "../gameResult/GameResult";

import { styles } from "./BodyGameStyle";

import { getImageCharacter } from "../../utils/ImportCharacter";
import BodyGame from "./BodyGame";
import { getImageOrVideoMonster } from "../../utils/ImportMonster";

const GamePlay = ({ myCharacter, adversaire , handlePressContinue}) => {
  const navigation = useNavigation();
  const [isPlaying, setIsPlaying] = useState(true);
  const [gameIsEnd, setGameIsEnd] = useState(false);
  const [imDead, setImDead] = useState(false);

  return (
    <ImageBackground
      source={require("../../assets/images/background.jpg")}
      resizeMode="cover"
      style={styles.container}
    >
      <View style={styles.container}>
        {!isPlaying && !gameIsEnd && (
          <GamePause
            isPlaying={isPlaying}
            gameIsEnd={gameIsEnd}
            setIsPlaying={setIsPlaying}
            navigation={navigation}
          />
        )}
        {gameIsEnd && (
          <GameResult
            handlePressContinue={handlePressContinue}
            navigation={navigation}
            imDead={imDead}
            pathImg={getImageCharacter("body", myCharacter.infos.id)}
          />
        )}
        <BodyGame
          setImDead={setImDead}
          myCharacter={myCharacter}
          adversaire={adversaire}
          pathImg={getImageCharacter("body", myCharacter.infos.id)}
          pathImgAd={getImageOrVideoMonster("img", adversaire.id)}
          setIsPlaying={setIsPlaying}
          isPlaying={isPlaying}
          setGameIsEnd={setGameIsEnd}
        />
      </View>
    </ImageBackground>
  );
};

export default GamePlay;
