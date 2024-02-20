import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../utils/colors";
import ProgressBar from "react-native-progress/Bar";

import { styles } from "./BodyGameStyle";

// FUNCTIONS

const getProgressBarColor = (value) => {
  if (value < 0.4) {
    return "red";
  } else if (value < 0.6) {
    return "yellow";
  } else {
    return "green";
  }
};

// VARIABLES RAPIDE

const SECONDS = 10;
const choices = ["defense", "attack", "superAttack"];

const BodyGame = ({
  setImDead,
  myCharacter,
  adversaire,
  setIsPlaying,
  setGameIsEnd,
  pathImg,
  pathImgAd,
}) => {
  const [tour, setTour] = useState(1);
  const [timeRemaining, setTimeRemaining] = useState(SECONDS);

  //MES STAT

  const [progress, setProgress] = useState(1);

  //STAT DE l'ADVERSAIRE

  const [maxLifePointAd, setMaxLifePointAd] = useState(adversaire.state.health);
  const [currentLifePointAd, setCurrentLifePointAd] = useState(maxLifePointAd);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.textWhite}>time</Text>
        </View>
        <TouchableOpacity onPress={() => setIsPlaying(false)}>
          <Image
            source={require("../../assets/images/menu-burger.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <View style={styles.part}>
          <Image source={pathImgAd} style={[styles.profileImage]} />
          <View style={styles.alignCenter}>
            <View>
              <ProgressBar
                progress={(currentLifePointAd / maxLifePointAd) * 100}
                width={200}
                color={getProgressBarColor(
                  (currentLifePointAd / maxLifePointAd) * 100
                )}
              />
            </View>
            <Text style={styles.textWhite}>{adversaire.name}</Text>
          </View>
        </View>
        <View style={[styles.part, styles.myPart]}>
          <View style={styles.containerMyPartLeft}>
            <View style={styles.containerMyImg}>
              <Image source={pathImg} style={[styles.myImg]} />
            </View>
            <View>
              <ProgressBar
                progress={(currentLifePointAd / maxLifePointAd) * 100}
                width={100}
                color={getProgressBarColor(
                  (currentLifePointAd / maxLifePointAd) * 100
                )}
              />
            </View>
            <Text style={styles.textWhite}>{myCharacter.name}</Text>
          </View>
          <View style={styles.containerBtnAction}>
            <TouchableOpacity>
              <Text style={styles.textWhite}>Defense</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setImDead(true);
                setGameIsEnd(true);
              }}
            >
              <Text style={styles.textWhite}>lose</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setImDead(false);
                setGameIsEnd(true);
              }}
            >
              <Text style={styles.textWhite}>win</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BodyGame;
