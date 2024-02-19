import { StyleSheet, Text, Touchable, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-web";
import { styles } from "../Armors/ArmorsStyle";

const Weapons = ({ weapons, handleWeapon, closePage }) => {
  const [typeChosen, setTypeChosen] = useState(false);
  const [weaponType, setWeaponType] = useState("");
  const [searchTerm, setSearchterm] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [filterByType, setfilterByType] = useState("");

  const handleFilterByType = (value) => setFilterByType(value);
  const handleSelectOption = (value) => setSelectedOption(value);
  const handleSearchTerm = (value) => setSearchTerm(value);
  const handleChoiseType = (type) => {
    setWeaponType(type);
    setTypeChosen(true);
  };

  const backWeapon = () => setTypeChosen(false);

  let newWeapons = weapons.filter(
    (weapon) =>
      (weapon.type === weaponType &&
        weapon.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        weapon.elements.find((element) => element.type === selectedOption)) ||
      (weapon.type === weaponType &&
        weapon.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        selectedOption === "") ||
      (weapon.type === weaponType &&
        weapon.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        selectedOption === "0" &&
        weapon.elements.length === 0)
  );

  if (filterByType === "Attack") {
    newWeapons.sort((a, b) => b.attack.display - a.attack.display);
  } else if (filterByType === "Element") {
    newWeapons.sort((a, b) => {
      const damageA = a.elements[0]?.damage || 0;
      const damageB = b.elements[0]?.damage || 0;
      return damageB - damageA;
    });
  }

  const renderItem = ({ weapon }) => (
    <TouchableOpacity style={styles.item} onPress={() => handleWeapon(weapon)}>
      <View style={styles.globalInfos}>
        <Text style={styles.paragraphList}>{weapon.name}</Text>
        <Text style={styles.rarity}>Rarity {weapon.rarity}</Text>
      </View>
      <View style={styles.detailsInfos}>
        {!weapon.assets ? (
          <Image
            source={require("../../../images/nullArmor.png")}
            style={styles.weaponImage}
          />
        ) : weapon.assets.image ? (
          <Image
            source={{ uri: weapon.assets.image }}
            style={styles.weaponImage}
          />
        ) : (
          <Image
            source={{ uri: weapon.assets.icon }}
            style={styles.weaponImage}
          />
        )}

        <View style={styles.stats}>
          <Text>Attack : {weapon.attack.display}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text>Weapons</Text>
    </View>
  );
};

export default Weapons;
