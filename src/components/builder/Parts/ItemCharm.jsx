import { TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "../ItemSheet/ItemSheetStyle"

function ItemCharm({ charm, toggleDisplayItem, setCharmsPage }) {
  return charm ? (
    <TouchableOpacity  onPress={() => toggleDisplayItem("charm")}>
      <Image source={require("../../../images/nullArmor.png")}  />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={() => setCharmsPage("charm")}></TouchableOpacity>
  );
}

export default ItemCharm;
