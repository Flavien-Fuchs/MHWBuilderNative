import React from "react";
import { TouchableOpacity, Image } from "react-native";

function ItemChest({ chest, toggleDisplayItem, setArmorPage }) {
  return chest ? (
    <TouchableOpacity
      style={styles.slotChest}
      onPress={() => toggleDisplayItem("chest")}
    >
      {!chest.assets ? (
        <Image
          source={require("../../images/nullArmor.png")}
          style={styles.image}
        />
      ) : chest.assets.imageMale ? (
        <Image source={{ uri: chest.assets.imageMale }} style={styles.image} />
      ) : (
        <Image
          source={{ uri: chest.assets.imageFemale }}
          style={styles.image}
        />
      )}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={styles.slotChestEmpty}
      onPress={() => setArmorPage("chest")}
    ></TouchableOpacity>
  );
}

export default ItemChest;
