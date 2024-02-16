import {
  View,
  Text,
  Modal,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

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
        console.log("modalVisible", modalVisible);
        setModalVisible(false);
      }}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.container}>
        <SafeAreaView style={styles.containerModal}>
          <View style={styles.containerBody}>
            <View
              style={{
                width: "100%",
                aspectRatio: 1,
              }}
            >
              <Image
                source={getImageCharacter("body", character.id)}
                style={styles.imageCharacSelect}
              />
            </View>
            <View style={styles.containerDescrip}>
              <Text style={styles.textName}>{character.name}</Text>
              <Text style={styles.textDecrip}>{character.descrip}</Text>
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
              <Text style={styles.textWhite}>Selected</Text>
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
    </Modal>
  );
};

export default ModalInfoCharacter;
