import { TouchableOpacity } from "react-native";
import React from "react";

function ItemCharm({ charm, toggleDisplayItem, setCharmsPage }) {
  return charm ? (
    <TouchableOpacity
      /* style={styles.charm} */
      onPress={() => toggleDisplayItem("charm")}
    >
      <Image
        source={require("../../images/charm-icon.png")}
        /*  style={styles.image} */
      />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      /* style={styles.slotCharmEmpty} */
      onPress={() => setCharmsPage("charm")}
    ></TouchableOpacity>
  );
}

export default ItemCharm;
