import React from "react";
import { TouchableOpacity, Image, ImageBackground } from "react-native";
import { styles } from "../ItemSheet/ItemSheetStyle";

function ItemLegs({ legs, toggleDisplayItem, setArmorPage }) {
  return legs ? (
    <TouchableOpacity style={styles.slot} onPress={() => toggleDisplayItem("legs")}>
      {!legs.assets ? (
        <Image source={require("../../../assets/images/nullArmor.png")} style={styles.armorImage} />
      ) : legs.assets.imageMale ? (
        <Image source={{ uri: legs.assets.imageMale }} style={styles.armorImage}/>
      ) : (
        <Image source={{ uri: legs.assets.imageFemale }} style={styles.armorImage} />
      )}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={styles.slot} onPress={() => setArmorPage("legs")}>
    <ImageBackground
    source={require("../../../assets/images/backgroundItems/jambeArmor.png")}
    style={styles.ImageBackground}
    > 
    </ImageBackground>
    </TouchableOpacity>
  );
  

}

export default ItemLegs;
