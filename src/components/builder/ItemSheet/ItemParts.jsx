import React from "react";
import { TouchableOpacity, Image, ImageBackground } from "react-native";
import { styles } from "../ItemSheet/ItemSheetStyle"

function ItemParts({ part, toggleDisplayItem, setArmorPage, icon }) {
  return part ? (
    <TouchableOpacity style={styles.slot} onPress={() => toggleDisplayItem(`${part}`)}>
      {!part.assets ? (
        <Image source={require("../../../assets/images/nullArmor.png")} style={styles.armorImage} />
      ) : part.assets.imageMale ? (
        <Image source={{ uri: part.assets.imageMale }} style={styles.armorImage} />
      ) : (
        <Image source={{ uri: part.assets.imageFemale }} style={styles.armorImage} />
      )}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={styles.slot} onPress={() => setArmorPage(`${part}`)}>
      <ImageBackground
      source={icon}
      style={styles.imageBackground}
      />
    </TouchableOpacity>
  );
}

export default ItemParts;