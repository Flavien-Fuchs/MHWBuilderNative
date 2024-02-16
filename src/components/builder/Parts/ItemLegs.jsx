import React from "react";
import { TouchableOpacity, Image, View } from "react-native";
import { styles } from "../ItemSheet/ItemSheetStyle";

function ItemLegs({ legs, toggleDisplayItem, setArmorPage }) {
  return legs ? (
    <TouchableOpacity onPress={() => toggleDisplayItem("legs")}>
      {!legs.assets ? (
        <Image source={require("../../../images/nullArmor.png")} />
      ) : legs.assets.imageMale ? (
        <Image source={{ uri: legs.assets.imageMale }} />
      ) : (
        <Image source={{ uri: legs.assets.imageFemale }} />
      )}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={styles.slot} onPress={() => setArmorPage("legs")}></TouchableOpacity>
  );
}

export default ItemLegs;
