import { Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./WeaponsStyle.js";

function WeaponsCategory({ handleChoiseType, image, name }) {
  return (
    <TouchableOpacity style={styles.weaponType} onPress={handleChoiseType}>
      <Image source={image} style={styles.weaponTypeImage} />
      <Text style={styles.weaponTypeText}>{name}</Text>
    </TouchableOpacity>
  );
}

export default WeaponsCategory;
