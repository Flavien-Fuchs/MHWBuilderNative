import { Text, View, Image, TouchableOpacity, Animated } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProgressBar from "react-native-progress/Bar";
import { styles } from "./BodyGameStyle";
import { colors } from "../../utils/colors";

//

import imgAtk from "../../assets/images/icons/atk.png";
import imgDef from "../../assets/images/icons/def.png";
import imgCrit from "../../assets/images/icons/crit.png";

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

  // MES STATS

  const [maxLifePoint, setMaxLifePoint] = useState(myCharacter.states.health);
  const [currentLifePoint, setCurrentLifePoint] = useState(maxLifePoint);
  const [myDamage, setMyDamage] = useState("");
  const viewAnimationMe = useRef(new Animated.Value(0)).current;
  const [imageAttackActuel, setImageAttackActuel] = useState(null);
  const [healthPoint, setHealthPoint] = useState("");

  // ATOUT

  const [atoutTourLeft, setAtoutTourLeft] = useState(3);
  const [isAtoutActiv, setIsAtoutActiv] = useState(false);

  //STATS DE l'ADVERSAIRE

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
    if (isAtoutActiv) {
      if (atoutTourLeft === 1) {
        setAtoutTourLeft(myCharacter.infos.atout.numberTurnOff);
        setIsAtoutActiv(false);
      } else {
        setAtoutTourLeft((prevValue) => parseInt(prevValue) - 1);
      }
    } else if (atoutTourLeft !== 0) {
      setAtoutTourLeft((prevValue) => parseInt(prevValue) - 1);
    }
  }, [tour]);

  const handleAtout = () => {
    if (!isAtoutActiv && atoutTourLeft === 0) {
      if (myCharacter.infos.atout.name === "support") {
        let addHealth = maxLifePoint * (myCharacter.infos.atout.value / 100);
        setCurrentLifePoint((prevlife) => prevlife + addHealth);
        setHealthPoint(addHealth);
        setTimeout(() => {
          setHealthPoint("");
        }, 1000);
        setAtoutTourLeft(myCharacter.infos.atout.numberTurnOff);
      } else {
        setIsAtoutActiv(true);
        setAtoutTourLeft(myCharacter.infos.atout.numberTurnDuration);
      }
    }
  };

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
    let damage = 0;
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

      damage =
        ((adversaire.state.attack / MULTIPLICATIONAD) *
          (100 /
            (100 +
              (isAtoutActiv && myCharacter.infos.atout.name === "tanks"
                ? myCharacter.states.augDefense *
                  (myCharacter.infos.atout.value / 100)
                : myCharacter.states.augDefense))) +
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
      damage =
        (((isAtoutActiv && myCharacter.infos.atout.name === "fighter"
          ? myCharacter.states.attack * (myCharacter.infos.atout.value / 100)
          : myCharacter.states.attack) /
          myCharacter.states.multipli) *
          (100 / (100 + adversaire.state.augDefense)) +
          (myElementDamage -
            (myElementDamage * resistanceElementaleAd * 10) / 100)) *
        MULTIPLICATEURFINALE;
    }

    damage =
      attack === "low" ? damage / 2 : attack === "normal" ? damage : damage * 2;
    damage = Math.round(damage * (0.8 + Math.random() * 0.5));

    const life = isMe ? currentLifePoint - damage : currentLifePointAd - damage;

    isMe
      ? (startAnimation(attack, isMe), shake(viewAnimationMe))
      : (startAnimation(attack, isMe), shake(viewAnimationAd));
    damage !== undefined && isMe && !isNaN(damage)
      ? setMyDamage(damage.toString())
      : setDamageAd(damage.toString());
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
      await new Promise((resolve) => setTimeout(resolve, 10));
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
          <Text
            style={{
              color:
                timeRemaining >= 6
                  ? colors.neutralWhiteColor
                  : timeRemaining < 6 && timeRemaining >= 4
                  ? colors.neutralYellowColor
                  : colors.neutralRedColor,
              ...styles.timeRemainingText,
            }}
          >
            {timeRemaining}
          </Text>
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
            <Image source={pathImgAd} style={styles.profileImage} />
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
              {damageAd && (
                <Text style={styles.damage}>{`-${damageAd.toString()}`}</Text>
              )}
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
              <Image source={pathImg} style={styles.myImg} />
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
                {healthPoint && (
                  <Text
                    style={styles.health}
                  >{`+${healthPoint.toString()}`}</Text>
                )}
                {myDamage && !isNaN(myDamage) && (
                  <Text style={styles.damage}>{`-${myDamage.toString()}`}</Text>
                )}
              </View>
              <View style={styles.containerAtout}>
                <TouchableOpacity
                  style={{
                    backgroundColor:
                      !isAtoutActiv && atoutTourLeft === 0
                        ? colors.neutralWhiteColor
                        : isAtoutActiv
                        ? colors.neutralYellowColor
                        : "transparent",
                    ...styles.btnAtout,
                  }}
                  onPress={() => handleAtout()}
                  disabled={!(!isAtoutActiv && atoutTourLeft === 0)}
                >
                  <Image
                    source={myCharacter.infos.atout.image}
                    style={{
                      opacity:
                        !isAtoutActiv && atoutTourLeft === 0
                          ? 1
                          : isAtoutActiv
                          ? 0.7
                          : 0.2,
                      ...styles.imageAtout,
                    }}
                  />
                </TouchableOpacity>
                <Text
                  style={{
                    color: colors.neutralWhiteColor,
                    textAlign: "center",
                  }}
                >
                  {!isAtoutActiv && atoutTourLeft === 0
                    ? "PRESS"
                    : atoutTourLeft}
                </Text>
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
                style={styles.btnAction}
              >
                <Image
                  source={
                    choice === "attack"
                      ? imgAtk
                      : choice === "defense"
                      ? imgDef
                      : imgCrit
                  }
                  style={styles.imageAction}
                />
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
