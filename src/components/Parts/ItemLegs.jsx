import React from "react";
import { TouchableOpacity, Image, View } from "react-native";

function ItemLegs({ legs, toggleDisplayItem, setArmorPage }) {
  return legs ? (
    <TouchableOpacity
      style={styles.slotLegs}
      onPress={() => toggleDisplayItem("legs")}
    >
      {!legs.assets ? (
        <Image source={require("../../images/nullArmor.png")} />
      ) : legs.assets.imageMale ? (
        <Image
          source={{ uri: legs.assets.imageMale }}
          style={styles.slotLegsImage}
        />
      ) : (
        <Image
          source={{ uri: legs.assets.imageFemale }}
          style={styles.slotLegsImage}
        />
      )}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={styles.slotLegsEmpty}
      onPress={() => setArmorPage("legs")}
    ></TouchableOpacity>
  );
}

export default ItemLegs;
