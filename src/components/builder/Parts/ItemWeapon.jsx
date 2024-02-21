import React from "react";
import { TouchableOpacity, Image, ImageBackground } from "react-native";
import { styles } from "../ItemSheet/ItemSheetStyle";

function ItemWeapon({ weapon, toggleDisplayItem, setWeaponPage }) {
  return weapon ? (
    <TouchableOpacity style={styles.slot} onPress={() => toggleDisplayItem("weapon")}>
      {!weapon.assets ? (
        <Image source={require("../../../assets/images/nullArmor.png")} style={styles.armorImage}/>
      ) : weapon.assets.image ? (
        <Image source={{ uri: weapon.assets.image }} style={styles.armorImage} />
      ) : (
        <Image source={{ uri: weapon.assets.icon }} style={styles.armorImage}/>
      )}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={styles.slot} onPress={setWeaponPage}>
      <ImageBackground
      source={require("../../../assets/images/backgroundItems/epee.png")}
      style={styles.imageBackground}
      > 
      </ImageBackground>
    </TouchableOpacity>
    
  );
}

export default ItemWeapon;
