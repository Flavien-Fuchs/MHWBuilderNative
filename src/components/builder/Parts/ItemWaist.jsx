import React from "react";
import { TouchableOpacity, Image, ImageBackground } from "react-native";
import { styles } from "../ItemSheet/ItemSheetStyle";

function ItemWaist({ waist, toggleDisplayItem, setArmorPage }) {
  return waist ? (
    <TouchableOpacity style={styles.slot} onPress={() => toggleDisplayItem("waist")}>
      {!waist.assets ? (
        <Image source={require("../../../assets/images/nullArmor.png")} style={styles.armorImage}/>
      ) : waist.assets.imageMale ? (
        <Image source={{ uri: waist.assets.imageMale }} style={styles.armorImage} />
      ) : (
        <Image source={{ uri: waist.assets.imageFemale }} style={styles.armorImage}/>
      )}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={styles.slot} onPress={() => setArmorPage("waist")}>
      <ImageBackground
      source={require("../../../assets/images/backgroundItems/tailleArmor.png")}
      style={styles.imageBackground}
      >
      </ImageBackground>
    </TouchableOpacity>
  );
}

export default ItemWaist;
