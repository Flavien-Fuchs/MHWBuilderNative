import React from "react";
import { TouchableOpacity, Image, ImageBackground } from "react-native";
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
    <ImageBackground
    source={require("../../../images/backgroundItems/epee.png")}
    >
    <TouchableOpacity style={styles.slot} onPress={setWeaponPage}></TouchableOpacity>
    </ImageBackground>
  );
}

export default ItemWeapon;
