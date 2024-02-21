import React from "react";
import { TouchableOpacity, Image, ImageBackground } from "react-native";
import { styles } from "../ItemSheet/ItemSheetStyle";

function ItemHead({ head, toggleDisplayItem, setArmorPage }) {
  return head ? (
    <TouchableOpacity style={styles.slot} onPress={() => toggleDisplayItem("head")}>
      {!head.assets ? (
        <Image source={require("../../../assets/images/nullArmor.png")} style={styles.armorImage} />
      ) : head.assets.imageMale ? (
        <Image source={{ uri: head.assets.imageMale }} style={styles.armorImage} />
      ) : (
        <Image source={{ uri: head.assets.imageFemale }} style={styles.armorImage} />
      )}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={styles.slot} onPress={() => setArmorPage("head")}>
      <ImageBackground
      source={require("../../../assets/images/backgroundItems/teteArmor.png")}
      style={styles.imageBackground}
      />
    </TouchableOpacity>
  );
}

export default ItemHead;
