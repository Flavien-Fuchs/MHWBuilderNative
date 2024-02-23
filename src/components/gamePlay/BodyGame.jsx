import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
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
const MULTIPLICATEURFINALE = 5;
const MULTIPLICATIONAD = 10;
const MULTIPLICATEURFINALEAD = 30;

const imagesLow = [
  require("../../assets/images/swordSlashes/WhiteSlashThin/File1.png"),
  require("../../assets/images/swordSlashes/WhiteSlashThin/File2.png"),
  require("../../assets/images/swordSlashes/WhiteSlashThin/File3.png"),
  require("../../assets/images/swordSlashes/WhiteSlashThin/File4.png"),
  require("../../assets/images/swordSlashes/WhiteSlashThin/File5.png"),
  require("../../assets/images/swordSlashes/WhiteSlashThin/File6.png"),
];

const imagesMedium = [
  require("../../assets/images/swordSlashes/BlueSlashThin/File1.png"),
  require("../../assets/images/swordSlashes/BlueSlashThin/File2.png"),
  require("../../assets/images/swordSlashes/BlueSlashThin/File3.png"),
  require("../../assets/images/swordSlashes/BlueSlashThin/File4.png"),
  require("../../assets/images/swordSlashes/BlueSlashThin/File5.png"),
  require("../../assets/images/swordSlashes/BlueSlashThin/File6.png"),
];

const imagesHight = [
  require("../../assets/images/swordSlashes/RedSlashWide/File1.png"),
  require("../../assets/images/swordSlashes/RedSlashWide/File2.png"),
  require("../../assets/images/swordSlashes/RedSlashWide/File3.png"),
  require("../../assets/images/swordSlashes/RedSlashWide/File4.png"),
  require("../../assets/images/swordSlashes/RedSlashWide/File5.png"),
  require("../../assets/images/swordSlashes/RedSlashWide/File6.png"),
];

const BodyGame = ({
  setImDead,
  myCharacter,
  adversaire,
  setIsPlaying,
  isPlaying,
  setGameIsEnd,
  pathImg,
  pathImgAd,
}) => {
  const [tour, setTour] = useState(1);
  const [timeRemaining, setTimeRemaining] = useState(SECONDS);

  //MES STAT

  const [maxLifePoint, setMaxLifePoint] = useState(myCharacter.states.health);
  const [currentLifePoint, setCurrentLifePoint] = useState(maxLifePoint);
  const [myDamage, setMyDamage] = useState("");
  const viewAnimationMe = useRef(new Animated.Value(0)).current;
  const [imageAttackActuel, setImageAttackActuel] = useState(null);

  //STAT DE l'ADVERSAIRE

  const [maxLifePointAd, setMaxLifePointAd] = useState(adversaire.state.health);
  const [currentLifePointAd, setCurrentLifePointAd] = useState(maxLifePointAd);
  const [damageAd, setDamageAd] = useState("");
  const [actionAd, setActionAd] = useState("");
  const viewAnimationAd = useRef(new Animated.Value(0)).current;
  const [imageAttackActuelAd, setImageAttackActuelAd] = useState(null);

  useEffect(() => {
    let timer;
    if (isPlaying) {
      clearInterval(timer);
      timer = setInterval(() => {
        setTimeRemaining((prevTime) => {
          if (prevTime === 1) {
            clearInterval(timer);
            handleTimeout();
            return SECONDS;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [tour, isPlaying]);

  useEffect(() => {
    isDead();
  }, [tour]);

  const isDead = () => {
    if (currentLifePoint <= 0 && currentLifePointAd <= 0) {
      setImDead(true);
    } else if (currentLifePoint <= 0) {
      setImDead(true);
    } else if (currentLifePointAd <= 0) {
      setImDead(false);
    } else {
      return;
    }
    setIsPlaying(false);
    setGameIsEnd(true);
  };

  const handleTimeout = () => {
    setActionAd("attack");
    setTimeout(() => {
      setActionAd("");
    }, 2000);
    degat("low", true);
    setTour((prevKey) => prevKey + 1);
    setTimeRemaining(SECONDS);
  };

  const randomChoice = () =>
    choices[Math.floor(Math.random() * choices.length)];

  const handleClickAction = (choice) => {
    const choiceAdversaire = randomChoice();
    setActionAd(choiceAdversaire);
    setTimeout(() => {
      setActionAd("");
    }, 2000);
    actions[choice][choiceAdversaire]();
    setTour((prevKey) => prevKey + 1);
    setTimeRemaining(SECONDS);
  };

  const actions = {
    attack: {
      defense: () => {
        degat("low", false);
      },
      attack: () => {
        degat("normal", true);
        degat("normal", false);
      },
      superAttack: () => {
        degat("normal", false);
        degat("critical", true);
      },
    },
    defense: {
      defense: () => {},
      attack: () => {
        degat("low", true);
      },
      superAttack: () => {
        degat("critical", false);
      },
    },
    superAttack: {
      defense: () => {
        degat("critical", true);
      },
      attack: () => {
        degat("normal", true);
        degat("critical", false);
      },
      superAttack: () => {
        degat("critical", true);
        degat("critical", false);
      },
    },
  };

  const triche = () => {
    setCurrentLifePointAd(0);
  };

  const degat = (attack, isMe) => {
    let dommmage = 0;
    const types = ["fire", "water", "ice", "thunder", "dragon"];
    if (isMe === true) {
      let elementDamageAd = 0;
      let type = "";
      let myResistanceElementale = 0;
      if (adversaire.state.elementalAttack) {
        elementDamageAd = adversaire.state.elementalAttack[0].damage;
        type = adversaire.state.elementalAttack[0].type;
        if (types.includes(type)) {
          type = type.charAt(0).toUpperCase() + type.slice(1);
          let resitanteName = `res${type}`;
          myResistanceElementale = myCharacter.states[resitanteName];
        }
      }
      dommmage =
        ((adversaire.state.attack / MULTIPLICATIONAD) *
          (100 / (100 + myCharacter.states.augDefense)) +
          (elementDamageAd -
            (elementDamageAd * myResistanceElementale * 10) / 100)) /
        MULTIPLICATEURFINALEAD;
    } else {
      let myElementDamage = 0;
      let type = "";
      let resistanceElementaleAd = 0;
      if (myCharacter.states.elementalAttack.length > 0) {
        myElementDamage = myCharacter.states.elementalAttack[0].damage;
        type = myCharacter.states.elementalAttack[0].type;
        if (types.includes(type)) {
          type = type.charAt(0).toUpperCase() + type.slice(1);
          let resitanteName = `res${type}`;
          resistanceElementaleAd = adversaire.state[resitanteName];
        }
      }
      dommmage =
        ((myCharacter.states.attack / myCharacter.states.multipli) *
          (100 / (100 + adversaire.state.augDefense)) +
          (myElementDamage -
            (myElementDamage * resistanceElementaleAd * 10) / 100)) *
        MULTIPLICATEURFINALE;
    }

    dommmage =
      attack === "low"
        ? dommmage / 2
        : attack === "normal"
        ? dommmage
        : dommmage * 2;
    dommmage = Math.round(dommmage * (0.8 + Math.random() * 0.5));
    const life = isMe
      ? currentLifePoint - dommmage
      : currentLifePointAd - dommmage;

    isMe
      ? (startAnimation(attack, isMe), shake(viewAnimationMe))
      : shake(viewAnimationAd);
    isMe ? setMyDamage(dommmage) : setDamageAd(dommmage);
    setTimeout(() => {
      isMe ? setMyDamage("") : setDamageAd("");
    }, 1000);

    isMe ? setCurrentLifePoint(life) : setCurrentLifePointAd(life);
  };

  const shake = (viewRef) => {
    Animated.sequence([
      Animated.timing(viewRef, {
        toValue: 10,
        duration: 50,
        useNativeDriver: false,
      }),
      Animated.timing(viewRef, {
        toValue: -10,
        duration: 50,
        useNativeDriver: false,
      }),
      Animated.timing(viewRef, {
        toValue: 10,
        duration: 50,
        useNativeDriver: false,
      }),
      Animated.timing(viewRef, {
        toValue: 0,
        duration: 50,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const animatedShakeStyle = {
    transform: [
      { translateX: viewAnimationMe },
      { translateY: viewAnimationMe },
    ],
  };

  const animatedShakeStyleAd = {
    transform: [
      { translateX: viewAnimationAd },
      { translateY: viewAnimationAd },
    ],
  };

  const startAnimation = async (attack = "low", isMe = true) => {
    let images;
    let setCurrentImage;
    attack === "low"
      ? (images = imagesLow)
      : attack === "normal"
      ? (images = imagesMedium)
      : (images = imagesHight);
    isMe
      ? (setCurrentImage = setImageAttackActuel)
      : (setCurrentImage = setImageAttackActuelAd);
    for (let i = 0; i < images.length; i++) {
      setCurrentImage(images[i]);
      await new Promise((resolve) => setTimeout(resolve, 50));
      if (i <= images.length - 1) {
        setCurrentImage(null);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => triche()}>
          <Text style={styles.textWhite}>Turn : {tour}</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.textWhite}>{timeRemaining}</Text>
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
          <Animated.View style={[styles.containerAdImg, animatedShakeStyleAd]}>
            <Image source={pathImgAd} style={[styles.profileImage]} />
            <View style={styles.imageContainerAttack}>
              {imageAttackActuelAd && (
                <View style={styles.imageAttack}>
                  <Image
                    source={imageAttackActuelAd}
                    style={styles.imageAttack}
                  />
                </View>
              )}
            </View>
            <View style={styles.containerDetail}>
              {damageAd && <Text style={styles.damage}>-{damageAd}</Text>}
            </View>
          </Animated.View>

          <View style={styles.alignCenter}>
            <View>
              <ProgressBar
                progress={parseFloat(
                  (currentLifePointAd / maxLifePointAd).toFixed(1)
                )}
                width={200}
                color={getProgressBarColor(
                  parseFloat((currentLifePointAd / maxLifePointAd).toFixed(1))
                )}
              />
            </View>
            <Text style={styles.textWhite}>{adversaire.name}</Text>
            <Text style={styles.textAction}>{actionAd}</Text>
          </View>
        </View>
        <View style={[styles.part, styles.myPart]}>
          <View style={styles.containerMyPartLeft}>
            <Animated.View style={[styles.containerMyImg, animatedShakeStyle]}>
              <Image source={pathImg} style={[styles.myImg]} />
              <View style={styles.imageContainerAttack}>
                {imageAttackActuel && (
                  <View style={styles.imageAttack}>
                    <Image
                      source={imageAttackActuel}
                      style={styles.imageAttack}
                    />
                  </View>
                )}
              </View>
              <View style={styles.containerDetail}>
                {myDamage && <Text style={styles.damage}>-{myDamage}</Text>}
              </View>
            </Animated.View>
            <View>
              <ProgressBar
                progress={parseFloat(
                  (currentLifePoint / maxLifePoint).toFixed(1)
                )}
                width={100}
                color={getProgressBarColor(
                  parseFloat((currentLifePoint / maxLifePoint).toFixed(1))
                )}
              />
            </View>
            <Text style={styles.textWhite}>{myCharacter.infos.name}</Text>
          </View>
          <View style={styles.containerBtnAction}>
            {choices.map((choice) => (
              <TouchableOpacity
                disabled={!isPlaying}
                key={choice}
                onPress={() => {
                  handleClickAction(choice);
                }}
              >
                <Text style={styles.textWhite}>{choice}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BodyGame;
