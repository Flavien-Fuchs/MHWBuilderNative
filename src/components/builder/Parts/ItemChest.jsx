import React from "react";
import { TouchableOpacity, Image } from "react-native";

function ItemChest({ chest, toggleDisplayItem, setArmorPage }) {
  return chest ? (
    <TouchableOpacity onPress={() => toggleDisplayItem("chest")}>
      {!chest.assets ? (
        <Image source={require("../../../images/nullArmor.png")} />
      ) : chest.assets.imageMale ? (
        <Image source={{ uri: chest.assets.imageMale }} />
      ) : (
        <Image source={{ uri: chest.assets.imageFemale }} />
      )}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={() => setArmorPage("chest")}></TouchableOpacity>
  );
}

export default ItemChest;
