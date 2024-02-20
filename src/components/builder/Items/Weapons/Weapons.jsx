import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { styles } from "../Armors/ArmorsStyle";
import { Picker } from "@react-native-picker/picker";
import { FlashList } from "@shopify/flash-list";
import { useState } from "react";
import WeaponsCategory from "./WeaponsCategory";

const Weapons = ({ weapons, handleWeapon, closePage }) => {
  const [typeChosen, setTypeChosen] = useState(false);
  const [weaponType, setWeaponType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [filterByType, setFilterByType] = useState("");

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
            source={require("../../../../assets/images/nullArmor.png")}
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
          {weapon.element[0] && (
            <Text>
              Element : {weapon.element[0].damage} ({weapon.elements[0].type})
            </Text>
          )}
          <Text>
            Affinity :{" "}
            {weapon.attributes.affinity
              ? `${weapon.attributes.affinity}%`
              : "0%"}
          </Text>
          {weapon.durability && (
            <View style={styles.sharpnessContainer}>
              <Text>Sharpness : </Text>
              <View
                style={
                  (styles.sharpnessRed,
                  { width: `${weapon.durability[0].red / 3}px` })
                }
              ></View>
              <View
                style={
                  (styles.sharpnessOrange,
                  { width: `${weapon.durability[0].orange / 3}px` })
                }
              ></View>
              <View
                style={
                  (styles.sharpnessYellow,
                  { width: `${weapon.durability[0].yellow / 3}px` })
                }
              ></View>
              <View
                style={
                  (styles.sharpnessGreen,
                  { width: `${weapon.durability[0].green / 3}px` })
                }
              ></View>
              <View
                style={
                  (styles.sharpnessBlue,
                  { width: `${weapon.durability[0].blue / 3}px` })
                }
              ></View>
              <View
                style={
                  (styles.sharpnessWhite,
                  { width: `${weapon.durability[0].white / 3}px` })
                }
              ></View>
              <View
                style={
                  (styles.sharpnessPurple,
                  { width: `${weapon.durability[0].purple / 3}px` })
                }
              ></View>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      {!typeChosen ? (
        <View style={styles.globalItemContainer}>
          <TouchableOpacity onPress={closePage} style={styles.closeButton}>
            {/* Button à mettre */}
          </TouchableOpacity>

          <View style={styles.typeContainer}>
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("great-sword")}
              image={require("../../../../assets/images/ArmorsIcons/great-sword.png")}
              name={"Great Sword"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("sword-and-shield")}
              image={require("../../../../assets/images/ArmorsIcons/sword-and-shield.png")}
              name={"Sword & Shield"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("long-sword")}
              image={require("../../../../assets/images/ArmorsIcons/long-sword.png")}
              name={"Long Sword"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("hammer")}
              image={require("../../../../assets/images/ArmorsIcons/hammer.png")}
              name={"Hammer"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("hunting-horn")}
              image={require("../../../../assets/images/ArmorsIcons/hunting-horn.png")}
              name={"Hunting Horn"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("gunlance")}
              image={require("../../../../assets/images/ArmorsIcons/gunlance.png")}
              name={"Gunlance"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("switch-axe")}
              image={require("../../../../assets/images/ArmorsIcons/switch-axe.png")}
              name={"Switch Axe"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("charge-blade")}
              image={require("../../../../assets/images/ArmorsIcons/charge-blade.png")}
              name={"Charge Blade"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("insect-glaive")}
              image={require("../../../../assets/images/ArmorsIcons/insect-glaive.png")}
              name={"Insect Glaive"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("bow")}
              image={require("../../../../assets/images/ArmorsIcons/bow.png")}
              name={"Bow"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("light-bowgun")}
              image={require("../../../../assets/images/ArmorsIcons/light-bowgun.png")}
              name={"Light Bowgun"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("heavy-bowgun")}
              image={require("../../../../assets/images/ArmorsIcons/heavy-bowgun.png")}
              name={"Heavy Bowgun"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("dual-blades")}
              image={require("../../../../assets/images/ArmorsIcons/dual-blades.png")}
              name={"Dual Blades"}
            />
            <WeaponsCategory
              handleChoiseType={() => handleChoiseType("lance")}
              image={require("../../../../assets/images/ArmorsIcons/lance.png")}
              name={"Lance"}
            />
          </View>
        </View>
      ) : (
        <View style={styles.globalItemContainer}>
          <View style={styles.itemNavBar}>
            <TouchableOpacity onPress={closePage} style={styles.closeButton}>
              {/* Button à mettre */}
            </TouchableOpacity>
            <TouchableOpacity onPress={backWeapon} style={buttonWeaponsType}>
              Choise weapon&apos;s type
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              value={searchTerm}
              onChangeText={handleSearchTerm}
              placeholder={"Search item by name"}
            />
            <View style={styles.filters}>
              <Text>Filter by :</Text>
              <View style={styles.filterDropdowns}>
                <Picker
                  selectedValue={selectedOption}
                  onValueChange={handleSelectOption}
                >
                  <Picker.Item label="Elements" value="" />
                  <Picker.Item label="Fire" value="fire" />
                  <Picker.Item label="Poison" value="poison" />
                  <Picker.Item label="Dragon" value="dragon" />
                  <Picker.Item label="Ice" value="ice" />
                  <Picker.Item label="Thunder" value="thunder" />
                  <Picker.Item label="Sleep" value="sleep" />
                  <Picker.Item label="Paralysis" value="paralysis" />
                  <Picker.Item label="Blast" value="max" />
                  <Picker.Item label="None" value="0" />
                </Picker>

                <Picker
                  style={styles.filterDropdown}
                  selectedValue={filterByType}
                  onValueChange={handleFilterByType}
                >
                  <Picker.Item label="Damages" value="" />
                  <Picker.Item label="Attack" value="Attack" />
                  <Picker.Item label="Element" value="Element" />
                </Picker>
              </View>
            </View>
          </View>
          <FlashList
            data={newWeapons}
            renderItem={renderItem}
            estimatedItemSize={200}
          />
        </View>
      )}
    </View>
  );
};

export default Weapons;
