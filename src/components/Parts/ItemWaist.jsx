import React from "react";
import { TouchableOpacity, Image, View } from "react-native";

function ItemWaist({ waist, toggleDisplayItem, setArmorPage }) {
  return waist ? (
    <TouchableOpacity
      style={styles.slotWaist}
      onPress={() => toggleDisplayItem("waist")}
    >
      {!waist.assets ? (
        <Image source={require("../../images/nullArmor.png")} />
      ) : waist.assets.imageMale ? (
        <Image
          source={{ uri: waist.assets.imageMale }}
          style={styles.slotWaistImage}
        />
      ) : (
        <Image
          source={{ uri: waist.assets.imageFemale }}
          style={styles.slotWaistImage}
        />
      )}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={styles.slotWaistEmpty}
      onPress={() => setArmorPage("waist")}
    ></TouchableOpacity>
  );
}

export default ItemWaist;
