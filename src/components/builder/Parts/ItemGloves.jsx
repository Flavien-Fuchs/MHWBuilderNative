import { TouchableOpacity, ImageBackground, Image } from "react-native";
import { styles } from "../ItemSheet/ItemSheetStyle";

function ItemGloves({ gloves, toggleDisplayItem, setArmorPage }) {
  return gloves ? (
    <TouchableOpacity style={styles.slot} onPress={() => toggleDisplayItem("gloves")}>
      {!gloves.assets ? (
        <Image source={require("../../../assets/images/nullArmor.png") } style={styles.armorImage} />
      ) : gloves.assets.imageMale ? (
        <Image source={{ uri: gloves.assets.imageMale }} style={styles.armorImage} />
      ) : (
        <Image source={{ uri: gloves.assets.imageFemale }} style={styles.armorImage} />
      )}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity style={styles.slot} onPress={() => setArmorPage("gloves")}>
      <ImageBackground
      source={require("../../../assets/images/backgroundItems/mainArmor.png")}
      style={styles.imageBackground}
      >
      </ImageBackground>
    </TouchableOpacity>
  );
}

export default ItemGloves;
