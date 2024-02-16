import React from "react";
import { TouchableOpacity, Image, ImageBackground } from "react-native";
import { styles } from "../ItemSheet/ItemSheetStyle";

function ItemLegs({ legs, toggleDisplayItem, setArmorPage }) {
  return legs ? (
    <TouchableOpacity onPress={() => toggleDisplayItem("legs")}>
      {!legs.assets ? (
        <Image source={require("../../../images/nullArmor.png")} />
      ) : legs.assets.imageMale ? (
        <Image source={{ uri: legs.assets.imageMale }} />
      ) : (
        <Image source={{ uri: legs.assets.imageFemale }} />
      )}
    </TouchableOpacity>
  ) : (
    <ImageBackground
    source={require("../../../images/backgroundItems/jambeArmor.png")}
    >
    <TouchableOpacity style={styles.slot} onPress={() => setArmorPage("legs")}></TouchableOpacity>
    </ImageBackground>
  );
  

}

export default ItemLegs;
