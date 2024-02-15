import React from "react";
import { TouchableOpacity, Image, View } from "react-native";

function ItemWeapon({ weapon, toggleDisplayItem, setWeaponPage }) {
  return weapon ? (
    <TouchableOpacity
      style={styles.slotWeapon}
      onPress={() => toggleDisplayItem("weapon")}
    >
      {!weapon.assets ? (
        <Image source={require("../../images/nullArmor.png")} />
      ) : weapon.assets.image ? (
        <Image
          source={{ uri: weapon.assets.image }}
          style={styles.weaponSlotImage}
        />
      ) : (
        <Image
          source={{ uri: weapon.assets.icon }}
          style={styles.weaponSlotImage}
        />
      )}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={styles.slotWeaponEmpty}
      onPress={setWeaponPage}
    ></TouchableOpacity>
  );
}

export default ItemWeapon;
