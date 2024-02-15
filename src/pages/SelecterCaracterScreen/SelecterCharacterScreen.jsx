import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { characters } from "../../assets/data/Characteres";
import { styles } from "./SelecterCharacterScreenStyle";
import ItemCardSelectCharacter from "../../components/SelecterCaracter/ItemCardSelectCharacter";

import { getImage } from "../../utils/ImportCharacter";

import ModalInfoCharacter from "../../components/SelecterCaracter/ModalInfoCharacter";

const SelecterCharacterScreen = ({ navigation }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isShowInfo, setIsShowInfo] = useState(false);
  const handleCard = (value) => {
    setSelectedCharacter(value);
  };
  const changeCharacter = (value) => {
    setSelectedCharacter(characters[value]);
  };

  const handlePlay = () => {
    navigation.push("Game");
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
        <View style={{ flex: 1 }}>
          <View style={styles.containerShowSelectCharacter}>
            {selectedCharacter ? (
              <>
                <View style={[styles.containerSelectCharacter]}>
                  <Image
                    source={getImage("body", selectedCharacter.id)}
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
                  getImage={getImage}
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
                pathImg={getImage("cover", character.id)}
                setCharacter={handleCard}
                selectedCharacter={selectedCharacter}
              />
            ))}
          </View>
          <View style={styles.containerBtnPlay}>
            <TouchableOpacity
              onPress={() => handlePlay()}
              style={{ ...styles.shadow, ...styles.btnPlay }}
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
