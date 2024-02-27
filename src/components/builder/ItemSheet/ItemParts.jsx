import React from "react";
import { TouchableOpacity, Image, ImageBackground } from "react-native";
import { styles } from "./ItemSheetStyle"

function ItemParts({ part, toggleDisplayItem, setArmorPage, icon, type }) {
  return part ? (
    <TouchableOpacity style={styles.slot} onPress={() => toggleDisplayItem(type)}>
      {!part.assets ? (
        <Image source={require("../../../assets/images/nullArmor.png")} style={styles.armorImage} />
      ) : part.assets.imageMale ? (
        <Image source={{ uri: part.assets.imageMale }} style={styles.armorImage} />
      ) : (
        <Image source={{ uri: part.assets.imageFemale }} style={styles.armorImage} />
      )}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={styles.slot} onPress={() => setArmorPage(type)}>
      <ImageBackground
      source={icon}
      style={styles.imageBackground}
      />
    </TouchableOpacity>
  );
}

export default ItemParts;