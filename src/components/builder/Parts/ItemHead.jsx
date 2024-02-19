import React from "react";
import { TouchableOpacity, Image, ImageBackground } from "react-native";
import { styles } from "../ItemSheet/ItemSheetStyle";

function ItemHead({ head, toggleDisplayItem, setArmorPage }) {
  return head ? (
    <TouchableOpacity style={styles.slot} onPress={() => toggleDisplayItem("head")}>
      {!head.assets ? (
        <Image source={require("../../../images/nullArmor.png")} style={styles.armorImage} />
      ) : head.assets.imageMale ? (
        <Image source={{ uri: head.assets.imageMale }} style={styles.armorImage} />
      ) : (
        <Image source={{ uri: head.assets.imageFemale }} style={styles.armorImage} />
      )}
    </TouchableOpacity>
  ) : (
    <ImageBackground
    source={require("../../../images/backgroundItems/teteArmor.png")}
    >
    <TouchableOpacity style={styles.slot} onPress={() => setArmorPage("head")}></TouchableOpacity>
    </ImageBackground>
  );
}

export default ItemHead;
