import React from "react";
import { TouchableOpacity, Image, View } from "react-native";

function ItemWaist({ waist, toggleDisplayItem, setArmorPage }) {
  return waist ? (
    <TouchableOpacity onPress={() => toggleDisplayItem("waist")}>
      {!waist.assets ? (
        <Image source={require("../../images/nullArmor.png")} />
      ) : waist.assets.imageMale ? (
        <Image source={{ uri: waist.assets.imageMale }} />
      ) : (
        <Image source={{ uri: waist.assets.imageFemale }} />
      )}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={() => setArmorPage("waist")}></TouchableOpacity>
  );
}

export default ItemWaist;
