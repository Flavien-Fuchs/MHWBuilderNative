import React from "react";
import { TouchableOpacity, Image } from "react-native";

function ItemHead({ head, toggleDisplayItem, setArmorPage }) {
  return head ? (
    <TouchableOpacity onPress={() => toggleDisplayItem("head")}>
      {!head.assets ? (
        <Image source={require("../../../images/nullArmor.png")} />
      ) : head.assets.imageMale ? (
        <Image source={{ uri: head.assets.imageMale }} />
      ) : (
        <Image source={{ uri: head.assets.imageFemale }} />
      )}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={() => setArmorPage("head")}></TouchableOpacity>
  );
}

export default ItemHead;
