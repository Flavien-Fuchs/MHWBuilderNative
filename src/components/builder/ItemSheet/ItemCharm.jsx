import { Image, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./ItemSheetStyle"

function ItemCharm({ part, toggleDisplayItem, setCharmsPage }) {
  return part ? (
    <TouchableOpacity style={[styles.slot, styles.slot1]} onPress={() => toggleDisplayItem("charm")}>
      <Image source={require("../../../assets/images/amulet3.png")} style={styles.charmImage} />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={[styles.slot, styles.slot1]} onPress={() => setCharmsPage("charm")}>
      <ImageBackground
        source={require("../../../assets/images/amulette.png")}
        style={styles.imageBackgroundCharm}
      />
    </TouchableOpacity>
  );
}

export default ItemCharm;
