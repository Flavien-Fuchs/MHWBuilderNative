import React from "react";
import { TouchableOpacity, Image, View } from "react-native";
import { styles } from "../ItemSheet/ItemSheetStyle";

function ItemWeapon({ weapon, toggleDisplayItem, setWeaponPage }) {
  return weapon ? (
    <TouchableOpacity onPress={() => toggleDisplayItem("weapon")}>
      {!weapon.assets ? (
        <Image source={require("../../../images/nullArmor.png")} />
      ) : weapon.assets.image ? (
        <Image source={{ uri: weapon.assets.image }} />
      ) : (
        <Image source={{ uri: weapon.assets.icon }} />
      )}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={styles.slot} onPress={setWeaponPage}></TouchableOpacity>
  );
}

export default ItemWeapon;
