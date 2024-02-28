import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

import { styles } from "./ItemCardSelectCharacterStyle";
import { colors } from "../../utils/colors";

const ItemCardSelectCharacter = ({
  character,
  setCharacter,
  pathImg,
  selectedCharacter,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setCharacter(character)}
    >
      <Image
        source={pathImg}
        style={[
          { opacity: selectedCharacter?.id === character.id ? 0.5 : 1 },
          styles.image,
        ]}
      />
      {selectedCharacter?.id === character.id && (
        <Image
          source={require("../../assets/images/check.png")}
          style={styles.btnCheck}
        />
      )}

      <Image
        source={character.atout.image}
        style={styles.competenceImage}
      ></Image>
    </TouchableOpacity>
  );
};

export default ItemCardSelectCharacter;
