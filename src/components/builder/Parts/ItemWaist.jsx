import React from "react";
import { TouchableOpacity, Image, ImageBackground } from "react-native";
import { styles } from "../ItemSheet/ItemSheetStyle";

function ItemWaist({ waist, toggleDisplayItem, setArmorPage }) {
  return waist ? (
    <TouchableOpacity onPress={() => toggleDisplayItem("waist")}>
      {!waist.assets ? (
        <Image source={require("../../../images/nullArmor.png")} />
      ) : waist.assets.imageMale ? (
        <Image source={{ uri: waist.assets.imageMale }} />
      ) : (
        <Image source={{ uri: waist.assets.imageFemale }} />
      )}
    </TouchableOpacity>
  ) : (
    <ImageBackground
    source={require("../../../images/backgroundItems/tailleArmor.png")}
    >
    <TouchableOpacity style={styles.slot} onPress={() => setArmorPage("waist")}></TouchableOpacity>
    </ImageBackground>
  );
}

export default ItemWaist;
