import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Modal,
  ImageBackground,
  Image,
  FlatList,
} from "react-native";
import { styles } from "./WeaponsStyle";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import WeaponsCategory from "./WeaponsCategory";
import { FlashList } from "@shopify/flash-list";

const Weapons = ({ weapons, handleWeapon, closePage, weaponPage }) => {
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

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => handleWeapon(item)}>
      <View style={styles.globalInfos}>
        <Text style={styles.paragraphList}>{item.name}</Text>
        <Text style={styles.rarity}>Rarity {item.rarity}</Text>
      </View>
      <View style={styles.detailsInfos}>
        {!item.assets ? (
          <Image
            source={{ uri: "../../../../src/images/nullArmor.png" }}
            style={styles.weaponImage}
            resizeMethod="resize"
          />
        ) : item?.assets?.image ? (
          <Image
            source={{
              uri: "https://assets.mhw-db.com/weapons/great-sword/83f7ab6e7e5669ec416d772049b8b054e2624c2e.c7bad811e203c9bb55626e414659a4f7.png",
            }}
            style={styles.weaponImage}
            resizeMethod="resize"
          />
        ) : (
          <Image
            source={{ uri: item.assets.icon }}
            style={styles.weaponImage}
            resizeMethod="resize"
          />
        )}

        <View style={styles.stats}>
          <Text>Attack : {item.attack.display}</Text>
          {item.elements.length > 0 && (
            <Text>
              Element : {item?.elements[0]?.damage} ({item?.elements[0]?.type})
            </Text>
          )}
          <Text>
            Affinity :{" "}
            {item.attributes.affinity ? `${item.attributes.affinity}%` : "0%"}
          </Text>
          {item.durability && (
            <View style={styles.sharpnessContainer}>
              <Text>Sharpness : </Text>
              <View
                style={
                  (styles.sharpnessRed,
                  { width: `${item.durability[0].red / 3}px` })
                }
              ></View>
              <View
                style={
                  (styles.sharpnessOrange,
                  { width: `${item.durability[0].orange / 3}px` })
                }
              ></View>
              <View
                style={
                  (styles.sharpnessYellow,
                  { width: `${item.durability[0].yellow / 3}px` })
                }
              ></View>
              <View
                style={
                  (styles.sharpnessGreen,
                  { width: `${item.durability[0].green / 3}px` })
                }
              ></View>
              <View
                style={
                  (styles.sharpnessBlue,
                  { width: `${item.durability[0].blue / 3}px` })
                }
              ></View>
              <View
                style={
                  (styles.sharpnessWhite,
                  { width: `${item.durability[0].white / 3}px` })
                }
              ></View>
              <View
                style={
                  (styles.sharpnessPurple,
                  { width: `${item.durability[0].purple / 3}px` })
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
        <View>
          <TouchableOpacity onPress={closePage} style={styles.closeButton}>
            <Text>Clos</Text>
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
        <View>
          <View style={styles.itemNavBar}>
            <TouchableOpacity onPress={closePage} style={styles.closeButton}>
              {/* Button à mettre */}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={backWeapon}
              style={styles.buttonWeaponsType}
            >
              <Text></Text>
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
