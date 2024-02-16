import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { styles } from "../ItemSheet/ItemSheetStyle"
import { ImageBackground } from "react-native-web";

function ItemChest({ chest, toggleDisplayItem, setArmorPage }) {
  return chest ? (
    <TouchableOpacity style={styles.slot} onPress={() => toggleDisplayItem("chest")}>
      {!chest.assets ? (
        <Image source={require("../../../images/nullArmor.png")} />
      ) : chest.assets.imageMale ? (
        <Image source={{ uri: chest.assets.imageMale }} />
      ) : (
        <Image source={{ uri: chest.assets.imageFemale }} />
      )}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={styles.slot} onPress={() => setArmorPage("chest")}></TouchableOpacity>
  );
}

export default ItemChest;
