import React from "react";
import { TouchableOpacity, Image } from "react-native";

function ItemHead({ head, toggleDisplayItem, setArmorPage }) {
  return head ? (
    <TouchableOpacity
      style={styles.slotHead}
      onPress={() => toggleDisplayItem("head")}
    >
      {!head.assets ? (
        <Image source={require("../../images/nullArmor.png")} />
      ) : head.assets.imageMale ? (
        <Image source={{ uri: head.assets.imageMale }} />
      ) : (
        <Image source={{ uri: head.assets.imageFemale }} />
      )}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={styles.slotHeadEmpty}
      onPress={() => setArmorPage("head")}
    ></TouchableOpacity>
  );
}

export default ItemHead;
