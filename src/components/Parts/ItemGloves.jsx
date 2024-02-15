import { TouchableOpacity } from "react-native";

function ItemGloves({ gloves, toggleDisplayItem, setArmorPage }) {
  return gloves ? (
    <TouchableOpacity
      style={styles.slotGloves}
      onPress={() => toggleDisplayItem("gloves")}
    >
      {!gloves.assets ? (
        <Image
          source={require("../../images/charm-icon.png")}
          style={styles.image}
        />
      ) : gloves.assets.imageMale ? (
        <Image source={{ uri: gloves.assets.imageMale }} style={styles.image} />
      ) : (
        <Image
          source={{ uri: gloves.assets.imageFemale }}
          style={styles.image}
        />
      )}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={styles.slotGlovesEmpty}
      onPress={() => setArmorPage("gloves")}
    ></TouchableOpacity>
  );
}

export default ItemGloves;
