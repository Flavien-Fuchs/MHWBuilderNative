import { Image, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "../ItemSheet/ItemSheetStyle"

function ItemCharm({ charm, toggleDisplayItem, setCharmsPage }) {
  return charm ? (
    <TouchableOpacity  onPress={() => toggleDisplayItem("charm")}>
      <Image source={require("../../../assets/images/amulet1.png")} style={styles.armorImage} />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={[styles.slot, styles.slot1]} onPress={() => setCharmsPage("charm")}>
      <ImageBackground
      source={require("../../../assets/images/charm-icon.png")}
      style={[styles.imageBackgroundCharm, {tintColor: 'white'}]}
      />
    </TouchableOpacity>
  );
}

export default ItemCharm;
