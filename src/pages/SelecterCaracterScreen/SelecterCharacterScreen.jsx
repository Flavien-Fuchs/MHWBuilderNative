import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { characters } from "../../assets/data/Characteres";
import { styles } from "./SelecterCharacterScreenStyle";
import ItemCardSelectCharacter from "../../components/SelecterCaracter/ItemCardSelectCharacter";

import { getImageCharacter } from "../../utils/ImportCharacter";

import ModalInfoCharacter from "../../components/SelecterCaracter/ModalInfoCharacter";

const SelecterCharacterScreen = ({ navigation, route }) => {
  const { myCharacter } = route.params;

  StatusBar.setBarStyle("light-content");
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isShowInfo, setIsShowInfo] = useState(false);
  const handleCard = (value) => {
    setSelectedCharacter(value);
  };
  const changeCharacter = (value) => {
    setSelectedCharacter(characters[value]);
  };

  const handlePlay = () => {
    myCharacter.infos = selectedCharacter;
    navigation.navigate("Game", { myCharacter });
  };

  return (
    <ImageBackground
      source={require("../../assets/images/background.jpg")}
      resizeMode="cover"
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../../assets/images/back.png")}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.flex}>
          <View style={styles.containerShowSelectCharacter}>
            {selectedCharacter ? (
              <>
                <View style={styles.containerSelectCharacter}>
                  <Image
                    source={getImageCharacter("body", selectedCharacter.id)}
                    style={styles.selectCharacterImage}
                  />
                  <View style={styles.containerNameAndInfo}>
                    <Text style={styles.textName}>
                      {selectedCharacter.name}
                    </Text>
                    <TouchableOpacity onPress={() => setIsShowInfo(true)}>
                      <Image
                        source={require("../../assets/images/info.png")}
                        style={styles.image}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <ModalInfoCharacter
                  modalVisible={isShowInfo}
                  setModalVisible={setIsShowInfo}
                  character={selectedCharacter}
                  getImageCharacter={getImageCharacter}
                  changeCharacter={changeCharacter}
                />
              </>
            ) : (
              <View>
                <Text style={styles.noSelectedText}>Select your character</Text>
              </View>
            )}
          </View>
          <View style={styles.containerCards}>
            {characters.map((character) => (
              <ItemCardSelectCharacter
                key={character.id}
                character={character}
                pathImg={getImageCharacter("cover", character.id)}
                setCharacter={handleCard}
                selectedCharacter={selectedCharacter}
              />
            ))}
          </View>
          <View style={styles.containerBtnPlay}>
            <TouchableOpacity
              disabled={!selectedCharacter}
              onPress={() => handlePlay()}
              style={{
                opacity: !selectedCharacter ? 0.5 : 1,
                ...styles.shadow,
                ...styles.btnPlay,
              }}
            >
              <Text style={styles.textBtn}>PLAY</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SelecterCharacterScreen;
