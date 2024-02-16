import React from "react";
import { TouchableOpacity, Image, ImageBackground } from "react-native";
import { styles } from "../ItemSheet/ItemSheetStyle";

function ItemHead({ head, toggleDisplayItem, setArmorPage }) {
  return head ? (
    <TouchableOpacity onPress={() => toggleDisplayItem("head")}>
      {!head.assets ? (
        <Image source={require("../../../images/nullArmor.png")} />
      ) : head.assets.imageMale ? (
        <Image source={{ uri: head.assets.imageMale }} />
      ) : (
        <Image source={{ uri: head.assets.imageFemale }} />
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
