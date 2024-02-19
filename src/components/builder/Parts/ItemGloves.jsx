import { TouchableOpacity, ImageBackground, Image } from "react-native";
import { styles } from "../ItemSheet/ItemSheetStyle";

function ItemGloves({ gloves, toggleDisplayItem, setArmorPage }) {
  return gloves ? (
    <TouchableOpacity onPress={() => toggleDisplayItem("gloves")}>
      {!gloves.assets ? (
        <Image source={require("../../../images/charm-icon.png")} />
      ) : gloves.assets.imageMale ? (
        <Image source={{ uri: gloves.assets.imageMale }} />
      ) : (
        <Image source={{ uri: gloves.assets.imageFemale }} />
      )}
    </TouchableOpacity>
  ) : (
    <ImageBackground
    source={require("../../../images/backgroundItems/mainArmor.png")}
    >
    <TouchableOpacity style={styles.slot} onPress={() => setArmorPage("gloves")}></TouchableOpacity>
    </ImageBackground>
    <ImageBackground
    source={require("../../../images/backgroundItems/mainArmor.png")}
    >
    <TouchableOpacity style={styles.slot} onPress={() => setArmorPage("gloves")}></TouchableOpacity>
    </ImageBackground>
  );
}

export default ItemGloves;
