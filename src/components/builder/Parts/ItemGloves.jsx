import { TouchableOpacity, ImageBackground, Image } from "react-native";
import { styles } from "../ItemSheet/ItemSheetStyle";

function ItemGloves({ gloves, toggleDisplayItem, setArmorPage }) {
  return gloves ? (
    <TouchableOpacity style={styles.slot} onPress={() => toggleDisplayItem("gloves")}>
      {!gloves.assets ? (
        <Image source={require("../../../images/charm-icon.png") } style={styles.armorImage} />
      ) : gloves.assets.imageMale ? (
        <Image source={{ uri: gloves.assets.imageMale }} style={styles.armorImage} />
      ) : (
        <Image source={{ uri: gloves.assets.imageFemale }} style={styles.armorImage} />
      )}
    </TouchableOpacity>
  ) : (
    <ImageBackground
    source={require("../../../images/backgroundItems/mainArmor.png")}
    >
    <TouchableOpacity style={styles.slot} onPress={() => setArmorPage("gloves")}></TouchableOpacity>
    </ImageBackground>
  );
}

export default ItemGloves;
