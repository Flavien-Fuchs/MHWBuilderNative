import { Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "../ItemSheet/ItemSheetStyle"

function ItemCharm({ charm, toggleDisplayItem, setCharmsPage }) {
  return charm ? (
    <TouchableOpacity  onPress={() => toggleDisplayItem("charm")}>
      <Image source={require("../../../assets/images/nullArmor.png")} style={styles.armorImage} />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={() => setCharmsPage("charm")}></TouchableOpacity>
  );
}

export default ItemCharm;
