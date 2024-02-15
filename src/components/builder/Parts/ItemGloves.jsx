import { TouchableOpacity } from "react-native";

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
    <TouchableOpacity onPress={() => setArmorPage("gloves")}></TouchableOpacity>
  );
}

export default ItemGloves;
