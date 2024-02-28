import {
  View,
  Text,
  Modal,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./ModalInfoCharacterStyle";

const ModalInfoCharacter = ({
  modalVisible,
  setModalVisible,
  character,
  getImageCharacter,
  changeCharacter,
}) => {
  const handleChange = (value) => {
    value = character.id + value - 1;
    if (value >= 0 && value < 11) {
      changeCharacter(value);
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      presentationStyle="overFullScreen"
      statusBarTranslucent={true}
      onBackdropPress={() => {
        setModalVisible(false);
      }}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <SafeAreaProvider>
        <View style={styles.container}>
          <SafeAreaView style={styles.containerModal}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Image
                source={require("../../assets/images/back.png")}
                style={styles.image}
              />
            </TouchableOpacity>
            <View style={styles.containerBody}>
              <View style={styles.containerImg}>
                <Image
                  source={getImageCharacter("body", character.id)}
                  style={styles.imageCharacSelect}
                />
              </View>
              <View style={styles.containerDescrip}>
                <Text style={styles.textName}>{character.name}</Text>
                <Text style={styles.textDecrip}>{character.descrip}</Text>
                <View style={styles.containerAtout}>
                  <Image
                    source={character.atout.image}
                    style={styles.competenceImage}
                  ></Image>
                  <Text style={[styles.textUpper, styles.textWhite]}>
                    {character.atout.name}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.footer}>
              <TouchableOpacity onPress={() => handleChange(-1)}>
                <Image
                  source={require("../../assets/images/gauche.png")}
                  style={{
                    opacity: character.id <= 1 ? 0.5 : 1,
                    ...styles.image,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.textWhite}>{character.name}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleChange(+1)}>
                <Image
                  source={require("../../assets/images/droite.png")}
                  style={{
                    opacity: character.id >= 11 ? 0.5 : 1,
                    ...styles.image,
                  }}
                />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </View>
      </SafeAreaProvider>
    </Modal>
  );
};

export default ModalInfoCharacter;
