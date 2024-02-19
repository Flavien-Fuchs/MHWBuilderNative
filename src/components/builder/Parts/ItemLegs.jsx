import React from "react";
import { TouchableOpacity, Image, ImageBackground } from "react-native";
import { styles } from "../ItemSheet/ItemSheetStyle";

function ItemLegs({ legs, toggleDisplayItem, setArmorPage }) {
  return legs ? (
    <TouchableOpacity style={styles.slot} onPress={() => toggleDisplayItem("legs")}>
      {!legs.assets ? (
        <Image source={require("../../../images/nullArmor.png")} style={styles.armorImage} />
      ) : legs.assets.imageMale ? (
        <Image source={{ uri: legs.assets.imageMale }} style={styles.armorImage}/>
      ) : (
        <Image source={{ uri: legs.assets.imageFemale }} style={styles.armorImage} />
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
