import React from "react";
import { TouchableOpacity, Image, ImageBackground } from "react-native";
import { styles } from "../ItemSheet/ItemSheetStyle"

function ItemChest({ chest, toggleDisplayItem, setArmorPage }) {
  return chest ? (
    <TouchableOpacity style={styles.slot} onPress={() => toggleDisplayItem("chest")}>
      {!chest.assets ? (
        <Image source={require("../../../images/nullArmor.png")} style={styles.armorImage} />
      ) : chest.assets.imageMale ? (
        <Image source={{ uri: chest.assets.imageMale }} style={styles.armorImage} />
      ) : (
        <Image source={{ uri: chest.assets.imageFemale }} style={styles.armorImage} />
      )}
    </TouchableOpacity>
  ) : (
    <ImageBackground
    source={require("../../../images/backgroundItems/torseArmor.png")}
    >
    <TouchableOpacity style={styles.slot} onPress={() => setArmorPage("chest")}></TouchableOpacity>
    </ImageBackground>
  );
}

export default ItemChest;